import express from 'express'
import User from '../db/model/userModel.js';
import PracticeQuestion from '../db/model/practiceQuestionModel.js';
import PracticeQuestionSubmit from '../db/model/practiceQuestionSubmitModel.js';
import { verifyToken } from '../util/secretToken.js';

const router = express.Router();

// create practice question
router.post('/create', async (req, res) => {
    try {
        const token = req.body.token;
        const user = await verifyToken(token);

        const {
            title,
            difficulty,
            grade,
            tags,
            questions,
            source,
            linkToSource,
        } = req.body

        const existingPracticeQuestion = await PracticeQuestion.findOne({
            title: title,
            createdBy: user._id
        })

        console.log(req.body)

        if (existingPracticeQuestion) {
            return res.status(400).json({ message: 'Duplicate title from this user', success: false })
        }

        let practiceQuestion = await PracticeQuestion.create({
            title,
            difficulty,
            grade,
            tags,
            questions,
            source,
            linkToSource,
            createdBy: user._id,
        })

        res.status(201).json({ message: "Practice Question Created Successfully", success: true, practiceQuestion })

    } catch(err) {
        res.status(500).json({ message: "Internal server error", success: false })
    }
})

router.get('/:username/:title', async (req, res) => {
    const { username, title } = req.params

    try {
        const user = await User.findOne({ username: username })

        const question = await PracticeQuestion.findOne({
            createdBy: user._id,
            title: title,
        }).populate('createdBy', 'username')

        if (!question) {
            return res.status(404).json({ message: 'Practice question not found', success: false });
        }

        res.status(200).json({
            success: true,
            question
        })
    } catch(err) {
        console.log(err)
        res.status(500).json({ message: "Internal server error"})
    }
})

// get the questions
router.get('/all', async (req, res) => {
    try {
        const practiceQuestion = await PracticeQuestion.find()
            .populate('createdBy', 'username')

        res.status(200).json({
            success: true,
            practiceQuestion
        })
    } catch(err) {
        res.status(500).json({ message: "Internal server error"})
    }
})

router.post('/submit', async (req, res) => {
    try {
        const token = req.body.token;
        const user = await verifyToken(token);

        const {
            practiceQuestion,
            score,
            answers,
            timer,
        } = req.body

        const submit = PracticeQuestionSubmit.create({
            submitedBy: user._id,
            practiceQuestion,
            score,
            answers,
            timer,
        })

        res.status(201).json({ message: "Practice Question Created Successfully", success: true })
    } catch(err) {
        console.log(err)
        res.status(500).json({ message: "Internal server error"})
    }
})

router.get('/get-all-submit', async (req, res) => {
    try {
        const token = req.body.token;
        const user = await verifyToken(token);

        const submits = await PracticeQuestionSubmit.find({ submitedBy: user._id })

        res.status(200).json({
            success: true,
            submits,
        })
    } catch(err) {
        console.log(err)
        res.status(500).json({ message: "Internal server error"})
    }
})


router.post('/get-best-submit', async (req, res) => {
    try {
        const token = req.body.token;
        const user = await verifyToken(token);

        const submits = await PracticeQuestionSubmit.aggregate([
            {
                $match: { submitedBy: user._id } // filter only this user's submits
            },
            {
                $sort: { score: -1 } // sort by score descending
            },
            {
                $group: {
                    _id: "$practiceQuestion", // group by question
                    bestSubmit: { $first: "$$ROOT" } // keep the top-scoring doc
                }
            },
            {
                $replaceRoot: { newRoot: "$bestSubmit" } // flatten the result
            },
            {
                $sort: { _id: -1 } // optional: sort by question ID or time
            }
        ]);

        res.status(200).json({
            success: true,
            submits,
        })
    } catch(err) {
        console.log(err)
        res.status(500).json({ message: "Internal server error"})
    }
})

router.get('/top-users', async (req, res) => {
    try {
        const result = await PracticeQuestionSubmit.aggregate([
            // 1. Sort to get the highest score at the top for each group
            { $sort: { score: -1 } },

            // 2. Group by user + question, keeping only best submit per question
            {
                $group: {
                    _id: {
                        user: "$submitedBy",
                        question: "$practiceQuestion"
                    },
                    bestScore: { $first: "$score" }
                }
            },

            // 3. Group by user to sum their best scores
            {
                $group: {
                    _id: "$_id.user",
                    totalScore: { $sum: "$bestScore" }
                }
            },

            // 4. Sort by totalScore descending
            { $sort: { totalScore: -1 } },

            // 5. Optionally lookup user info
            {
                $lookup: {
                    from: "users", // the MongoDB collection name (usually lowercase plural)
                    localField: "_id",
                    foreignField: "_id",
                    as: "user"
                }
            },
            { $unwind: "$user" },

            // 6. Format output
            {
                $project: {
                    _id: 0,
                    userId: "$user._id",
                    username: "$user.username", // change as needed
                    totalScore: 1
                }
            }
        ]);

        res.status(200).json({
            success: true,
            leaderboard: result
        })
    } catch(err) {
        console.log(err)
        res.status(500).json({ message: "Internal server error"})
    }
})

router.delete('/delete', async (req, res) => {
    const { questionId, token } = req.body;

    console.log('attempt to delete the question')

    if (!questionId) {
        return res.status(400).json({ message: "Missing questionId in request body.", success: false });
    }

    if (!token) {
        return res.status(401).json({ message: "Token is missing", success: false });
    }

    try {
        const user = await verifyToken(token)

        if (user.name != 'admin') {
            return res.status(401).json({ message: "You don't have permission to do that", success: false });
        }

        // Delete the practice question
        const deletedQuestion = await PracticeQuestion.findByIdAndDelete(questionId);

        if (!deletedQuestion) {
            return res.status(404).json({ error: "Practice question not found." });
        }

        // Delete all submissions associated with this question
        await PracticeQuestionSubmit.deleteMany({ practiceQuestion: questionId });

        return res.json({ message: "Question and its submissions deleted successfully.", success: true });
    } catch (err) {
        console.error("Error deleting question:", err);
        return res.status(500).json({ message: "Internal server error.", success: false });
    }
})

export default router
