import mongoose from "mongoose";
const { Schema, model } = mongoose

const practiceQuestionSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    difficulty: {
        type: String,
        enum: ["easy", "medium", "hard"],
        required: true,
    },
    grade: {
        type: Number,
        required: true,
    },
    tags: {
        type: [String],
        default: [],
    },
    questions: [{
        type: {
            type: String,
            enum: ["multiple_choices", "written"],
            required: true,
        },
        questionText: {
            type: String,
            required: true,
        },
        imageLink: String,
        // for multiple_choices
        choices: [String],
        correctAnserIndex: Number,
        // for written
        correctAnswer: String,
    }],
})

const PracticeQuestion = model('PracticeQuestion', practiceQuestionSchema)
export default PracticeQuestion
