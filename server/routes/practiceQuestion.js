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

        const practiceQuestion = await PracticeQuestion.create({
            title,
            difficulty,
            grade,
            tags,
            questions,
            createdBy: user._id
        })

        res.status(201).json({ message: "Practice Question Created Successfully", success: true, practiceQuestion })

    } catch(err) {
        res.status(500).json({ message: "Internal server error"})
    }
})

export default router
