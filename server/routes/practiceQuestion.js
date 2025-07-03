import express from 'express'
import PracticeQuestion from '../db/model/practiceQuestionModel.js';
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
            questions
        } = req.body

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


export default router
