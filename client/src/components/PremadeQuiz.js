import "./assets/css_reset.css"
import "./assets/styles.css";
import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';
import dbAPI from "../utils/dbAPI";
import { List, ListItem } from "./List";


function PremadeQuiz() {

    const [quizes, setQuizes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [quizFinish, setQuizFinish] = useState(false);
    const [questionCount, setQuestionCount] = useState(0);
    const [quiz, setQuiz] = useState([]);
    const [score, setScore] = useState(0);

    // increment question number
    const handleQuestionCount = () => {
        setQuestionCount(questionCount + 1);
    };

    // load all quiz data on page load
    useEffect(() => {
        loadQuizes()
    }, [])

    const loadQuizes = () => {
        dbAPI.getQuizes()
            .then(results =>
                setQuizes(results.data)
            )
            .catch(err => console.log(err));
    };

    // get quiz info by id
    const loadQuizById = (id) => {
        dbAPI.getQuiz(id)
            .then(results =>
                setQuiz(results.data),
                
                setTimeout(() => setLoading(true), 1000),
                console.log(quiz)
            )
            .catch(err => console.log(err));

    };

    // button handler for quiz selection
    const selectQuiz = (event) => {
        event.preventDefault();

        var id = event.currentTarget.value;
        console.log(id);

        loadQuizById(id);

    }

    // button handler for answer button
    const answerButton = (event) => {
        event.preventDefault();

        var answer = event.currentTarget.value;
        console.log(answer);

        handleQuestionCount();

        if (answer === quiz.correct_ans[questionCount]) {
            setScore(score + 10);
        }

        if (questionCount === 4) {
            setQuizFinish(true);
        }

    }

    // redirect to endquiz page once quiz is complete
    if (quizFinish) {
        console.log(score);
        return <Redirect to={{pathname:"/scorescreen",
                state: {scorePass: score, name: quiz.title}}} />
    }

    return (

        <div className="WelcomeBox space">

            {quizes.length && !loading ? (
                <List>
                    { quizes.map(quizData => (
                        <ListItem key={quizData._id}>
                            <div className="space">
                                <Button onClick={selectQuiz} value={quizData._id} className="space answerBtn" type="submit" variant="outlined" color="primary">
                                    {quizData.title}
                                </Button>
                            </div>
                        </ListItem>
                    ))}
                </List>
            ) : (
                <div></div>
            )}

            {loading ? (

                <div>

                    <h1 className="smallHeader"><br /> {quiz.title} <br />&nbsp;</h1>
                    <h6 className="space"> Score: {score}/50</h6>
                    <h6 className="space smallright"> Question Number: {questionCount + 1}/5</h6>
                    <h2 className="space">Question: {quiz.questions[questionCount]} </h2>
                    <Button className="space answerBtn" onClick={answerButton} type="submit" variant="outlined" color="primary" value={quiz.answers[questionCount][0]}>A: {quiz.answers[questionCount][0]} </Button>
                    <div className="space"></div>
                    <Button className="space answerBtn" onClick={answerButton} type="submit" variant="outlined" color="primary" value={quiz.answers[questionCount][1]}>B: {quiz.answers[questionCount][1]} </Button>
                    <div className="space"></div>
                    <Button className="space answerBtn" onClick={answerButton} type="submit" variant="outlined" color="primary" value={quiz.answers[questionCount][2]}>C: {quiz.answers[questionCount][2]} </Button>
                    <div className="space"></div>
                    <Button className="space answerBtn" onClick={answerButton} type="submit" variant="outlined" color="primary" value={quiz.answers[questionCount][3]}>D: {quiz.answers[questionCount][3]} </Button>
                    <div className="space"></div>

                </div>

            ) : (

                <div className="smallHeader">
                <h3><br />SELECT A QUIZ<br />&nbsp;</h3>
                </div>
            )}

        </div>

    );

}

export default PremadeQuiz;