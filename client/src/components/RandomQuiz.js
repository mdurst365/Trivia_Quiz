import "./assets/css_reset.css"
import "./assets/styles.css";

import React, { useEffect, useState } from 'react';

// import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import { Link, Redirect } from 'react-router-dom';

const opentdb = require('opentdb-api');

var options = {
    amount: 5,
    category: 'any',
    type: 'multiple',
}


/*questions = opentdb.getTrivia(options).then(result => {
  console.log(result);
  return(result)
});*/

function RandomQuiz () { 
    
    const [quizes, setQuizes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [quizFinish, setQuizFinish] = useState(false);
    const [questionCount, setQuestionCount] = useState(0);
    const [quiz, setQuiz] = useState([]);
    const [score, setScore] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);

    const handleQuestionCount = () => {
        setQuestionCount(questionCount + 1);
    };

    // const loadQuizes = () => {
    //     dbAPI.getQuizes()
    //         .then(results =>
    //             setQuizes(results.data)
    //         )
    //         .catch(err => console.log(err));
    // };

 // get quiz info by id
//  const loadQuizById = (id) => {
//     dbAPI.getQuiz(id)
//         .then(results =>
//             setQuiz(results.data),
//             setTimeout(() => setLoading(true), 1000),
//             console.log(quiz)
//         )
//         .catch(err => console.log(err));

// };

// button handler for quiz selection
// const selectQuiz = (event) => {
//     event.preventDefault();

//     var id = event.currentTarget.value;
//     console.log(id);

//     loadQuizById(id);

// }

// button handler for answer button
const answerButton = (event) => {
    event.preventDefault();

    var answer = event.currentTarget.value;
    console.log(answer);

    handleQuestionCount();

    if (answer === answers[questionCount]) {
        setScore(score + 10);
    }

    if (questionCount === 4) {
        setQuizFinish(true);
    }

}

var options = {
    amount: 5,
    category: 'any',
    type: 'multiple'
}

    function apiCall() { opentdb.getTrivia(options).then(result => {
        console.log(result);
        let arrayQuestion = [result[0].question, result[0].correct_answer, result[0].incorrect_answers[0], result[0].incorrect_answers[1], result[0].incorrect_answers[2], result[1].question, result[1].incorrect_answers[0], result[1].incorrect_answers[1], result[1].correct_answer, result[1].incorrect_answers[2], result[2].question, result[2].incorrect_answers[0], result[2].correct_answer, result[2].incorrect_answers[1], result[2].incorrect_answers[2], result[3].question, result[3].incorrect_answers[0], result[3].incorrect_answers[1], result[3].incorrect_answers[2], result[3].correct_answer, result[4].question, result[4].incorrect_answers[0], result[4].incorrect_answers[1], result[4].incorrect_answers[2], result[4].correct_answer]
        let arrayAnswer = [result[0].correct_answer,result[1].correct_answer,result[2].correct_answer,result[3].correct_answer,result[4].correct_answer]
        setQuestions(arrayQuestion);
        setAnswers(arrayAnswer);
        console.log(questions)
    })}

    useEffect(() => {
       
        apiCall();
    },[])


if (quizFinish) {
    console.log(score);
    return <Redirect to={{pathname:"/EndQuiz",
            state: {scorePass: score, name: "Random Quiz"}}} />
}

    return (
        <div className="WelcomeBox space">
        <h1 className="smallHeader"><br /> RANDOM QUIZ <br />&nbsp;</h1>
                    <h6 className="space"> Score: {score}/50</h6>
                    <h6 className="space smallright"> Question Number: {questionCount + 1}/5</h6>
                    <h2 className="space">Question: {questions[questionCount*5]} </h2>
                    <Button className="space answerBtn" onClick={answerButton} type="submit" variant="outlined" color="primary" value={questions[(questionCount*5)+1]}>A: {questions[(questionCount*5)+1]} </Button>
                    <div className="space"></div>
                    <Button className="space answerBtn" onClick={answerButton} type="submit" variant="outlined" color="primary" value={questions[(questionCount*5)+2]}>B: {questions[(questionCount*5)+2]} </Button>
                    <div className="space"></div>
                    <Button className="space answerBtn" onClick={answerButton} type="submit" variant="outlined" color="primary" value={questions[(questionCount*5)+3]}>C: {questions[(questionCount*5)+3]} </Button>
                    <div className="space"></div>
                    <Button className="space answerBtn" onClick={answerButton} type="submit" variant="outlined" color="primary" value={questions[(questionCount*5)+4]}>D: {questions[(questionCount*5)+4]} </Button>
                    <div className="space"></div>

            <p className="space">
                <Button type="submit" variant="outlined" color="primary">
                    <Link to="/endquiz">
                        Next
                    </Link>
                </Button>
            </p>
        </div>
    );
}

export default RandomQuiz;