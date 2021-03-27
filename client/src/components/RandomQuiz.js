import "./assets/css_reset.css"
import "./assets/styles.css";
import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const opentdb = require('opentdb-api');

var options = {
    amount: 5,
    category: 'any',
    type: 'multiple'
}


/*questions = opentdb.getTrivia(options).then(result => {
  console.log(result);
  return(result)
});*/

function RandomQuiz () { 
    
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [questions, setQuestions] = useState();
    // want to check the selection with the correct answer

    var options = {
        amount: 5,
        category: 'any',
        type: 'multiple'
    }

    const checkAnswer = (event) => {
        // increment the current question and check to see if we have reached the end
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);        
        }
        else {
            // send to the results page or something along those lines
        }
        // check to see if the clicked answer is correct
    
        // if the selection is correct, increase the score and move to the next question
    
        // if the selection is incorrect, move to the next question (might need to get rid of the next button)
    }

    useEffect((options) => {
        opentdb.getTrivia(options).then(result => {
            console.log(result);
            let arrayQuestion = [result[0].question, result[0].correct_answer, result[0].incorrect_answers[0], result[0].incorrect_answers[1], result[0].incorrect_answers[2]]
            setQuestions(arrayQuestion);
        })

    },[])

    return (
        <div className="WelcomeBox space">
            <h1 className="smallHeader"><br />RANDOM QUIZ<br />&nbsp;</h1>
            <h6 className="space smallright">Question: 1/5</h6>
            <h2 className="space">{questions[0]}</h2>
            <p className="space answerBtn" onClick={() => checkAnswer()}>{questions[1]}</p>
            <div className="space"></div>
            <p className="space answerBtn" onClick={() => checkAnswer()}>{questions[2]}</p>
            <div className="space"></div>
            <p className="space answerBtn" onClick={() => checkAnswer()}>{questions[3]}</p>
            <div className="space"></div>
            <p className="space answerBtn" onClick={() => checkAnswer()}>{questions[4]}</p>
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