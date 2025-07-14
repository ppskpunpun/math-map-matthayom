import express from 'express'
import User from '../db/model/userModel.js';
import PracticeQuestion from '../db/model/practiceQuestionModel.js';
import PracticeQuestionSubmit from '../db/model/practiceQuestionSubmitModel.js';
import { verifyToken, getToken } from '../util/secretToken.js';

const router = express.Router();

// create practice question
router.post('/create', async (req, res) => {
    const token = await getToken(req, res);
    try {
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
        const token = await getToken(req, res);
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
        const token = await getToken(req, res);
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


router.get('/get-best-submit', async (req, res) => {
    try {
        const token = await getToken(req, res);
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

export default router
