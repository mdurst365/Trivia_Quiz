const mongoose = require("mongoose");
const Quiz = require("./Quiz");
const User = require("./User");

const Schema = mongoose.Schema;

const scoreSchema = new Schema({
    user_id: String,//{ type: Schema.Types.ObjectId, ref: User },
    quiz_id: String,//{ type: Schema.Types.ObjectId, ref: Quiz },
    attempts: Number,
    highscore: Number
});

const Score = mongoose.model("Score", scoreSchema);

module.exports = Score;