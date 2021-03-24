const mongoose = require("mongoose");
const db = require("../models");

// This seed file empties the user, quiz and score tables and then inserts the seeded records

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/trivia_db");

const userId1 = new mongoose.Types.ObjectId();
const userId2 = new mongoose.Types.ObjectId();
const userId3 = new mongoose.Types.ObjectId();
const userId4 = new mongoose.Types.ObjectId();
const userId5 = new mongoose.Types.ObjectId();

const userSeed = [
    {
        id: userId1,
        email: "test1@email.com",
        password: "password1"
    },
    {
        id: userId2,
        email: "test2@email.com",
        password: "password2"
    },
    {
        id: userId3,
        email: "test3@email.com",
        password: "password3"
    },
    {
        id: userId4,
        email: "test4@email.com",
        password: "password4"
    },
    {
        id: userId5,
        email: "test5@email.com",
        password: "password5"
    },
];


const quizSeed = [
    {
        user_id: userId1,
        category: "Geography",
        title: "State Capitals Quiz",
        questions:
            [
                "What is the capital of Ohio?",
                "What is the capital of Indiana?",
                "What is the capital of Kentucky?",
                "What is the capital of Virginia?",
                "What is the capital of New York?"
            ],
        answers:
            [
                ["answer1", "answer2", "answer3", "answer4", "answer5"],
                ["answer1", "answer2", "answer3", "answer4", "answer5"],
                ["answer1", "answer2", "answer3", "answer4", "answer5"],
                ["answer1", "answer2", "answer3", "answer4", "answer5"],
                ["answer1", "answer2", "answer3", "answer4", "answer5"]
            ],
        correct_ans:
            [
                "answer1",
                "answer2",
                "answer3",
                "answer4",
                "answer5"
            ]
    },
    {
        user_id: userId2,
        category: "History",
        title: "US President Quiz",
        questions:
            [
                "Who was the first president of the US?",
                "Who was the 16th President of the US?",
                "Which president is from Ohio?",
                "Who was president during WW1?",
                "Who was president during WW2?"
            ],
        answers:
            [
                ["answer1", "answer2", "answer3", "answer4", "answer5"],
                ["answer1", "answer2", "answer3", "answer4", "answer5"],
                ["answer1", "answer2", "answer3", "answer4", "answer5"],
                ["answer1", "answer2", "answer3", "answer4", "answer5"],
                ["answer1", "answer2", "answer3", "answer4", "answer5"]
            ],
        correct_ans:
            [
                "answer1",
                "answer2",
                "answer3",
                "answer4",
                "answer5"
            ]
    },
    {
        user_id: userId3,
        category: "Science",
        title: "Periodic Table Quiz",
        questions:
            [
                "What is the first element on the periodic table?",
                "Which element is a gas at room temperature?",
                "Which element is radioactive?",
                "Which element is used in old-fashioned thermometers?",
                "What element is our sun mostly comprised of?"
            ],
        answers:
            [
                ["answer1", "answer2", "answer3", "answer4", "answer5"],
                ["answer1", "answer2", "answer3", "answer4", "answer5"],
                ["answer1", "answer2", "answer3", "answer4", "answer5"],
                ["answer1", "answer2", "answer3", "answer4", "answer5"],
                ["answer1", "answer2", "answer3", "answer4", "answer5"]
            ],
        correct_ans:
            [
                "answer1",
                "answer2",
                "answer3",
                "answer4",
                "answer5"
            ]
    },
];

// const scoreSeed = [
//     {
//         user_id: "user1",
//         quiz_id: "quiz1",
//         attempts: 5,
//         highscore: 10
//     },
// ];

// seed user table
db.User
    .deleteMany({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(userData => {
        console.log(userData.result.n + " User records inserted");
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

// seed quiz table
db.Quiz
    .deleteMany({})
    .then(() => db.Quiz.collection.insertMany(quizSeed))
    .then(quizData => {
        console.log(quizData.result.n + " Quiz records inserted");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

// seed score table
// db.Score
//     .remove({})
//     .then(() => db.Score.collection.insertMany(scoreSeed))
//     .then(scoreData => {
//         console.log(scoreData.result.n + " records inserted");
//         process.exit(0);
//     })
//     .catch(err => {
//         console.error(err);
//         process.exit(1);
//     });