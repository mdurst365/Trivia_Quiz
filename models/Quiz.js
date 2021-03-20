const mongoose = require("mongoose");
const User = require("./User");

const Schema = mongoose.Schema;

const quizSchema = new Schema({
    user_id: [{ type: Schema.Types.ObjectId, ref: User }],
    category: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    questions: Array,
    answers: Array,
    correct_ans: Array
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;