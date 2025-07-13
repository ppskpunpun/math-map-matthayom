import mongoose from "mongoose";
const { Schema, model } = mongoose

const practiceQuestionSubmitSchema = new Schema({
    submitedAt: {
        type: Date,
        default: new Date()
    },
    submitedBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    practiceQuestion: {
        type: Schema.Types.ObjectId,
        ref: "practiceQuestion",
        required: true,
    },
    answers: {
        type: [String],
        default: [],
        required: true,
    },
    score: {
        type: Number,
        default: 0,
    },
    timer: {
        type: Number,
        default: 0,
    }
})

const PracticeQuestionSubmit = model('PracticeQuestionSubmit', practiceQuestionSubmitSchema)
export default PracticeQuestionSubmit
