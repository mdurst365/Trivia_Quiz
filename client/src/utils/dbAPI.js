import axios from "axios";

// database api routes

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    
    // get all users
    getUsers: () => axios.get("/api/user"),

    // get user by id
    getUser: (id) => axios.get("/api/user/" + id),

    // create user
    createUser: (userData) => axios.post("/api/user", userData),

    // get all quizes
    getQuizes: () => axios.get("/api/quiz"),

    // get quiz by id
    getQuiz: (id) => axios.get("/api/quiz/" + id),

    // create quiz
    createQuiz: (quizData) => axios.post("/api/quiz", quizData)

};