import "./assets/css_reset.css"
import "./assets/styles.css";
import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import dbAPI from "../utils/dbAPI";
import { List, ListItem } from "./List";


function PremadeQuiz() {

    const [quizes, setQuizes] = useState([]);
    const [quiz, setQuiz] = useState([]);
    const [questionCount, setQuestionCount] = useState(0);
    const [answerCount, setAnswerCount] = useState(0);
    const [finished, setFinished] = useState(false);

    // increment question number
    const handleQuestionCount = () => {
        setQuestionCount(questionCount + 1);
    };

    useEffect(() => {
        loadQuizes()
    }, [])

    // useEffect(() => {
    //    setTimeout(() => setFinished(true), 3000)
    // }, [quiz])

    const loadQuizes = () => {
        dbAPI.getQuizes()
            .then(results =>
                setQuizes(results.data)
            )
            .catch(err => console.log(err));
    };

    const loadQuizById = (id) => {
        dbAPI.getQuiz(id)
            .then(results =>
                setQuiz(results.data),
                setTimeout(() => setFinished(true), 1000),
                console.log(quiz)
            )
            .catch(err => console.log(err));

    };

    const selectQuiz = (event) => {

        event.preventDefault();

        var id = event.currentTarget.value;
        console.log(event.currentTarget.value);

        loadQuizById(id);

    }

    return (

        <div className="WelcomeBox space">

            { quizes.length && !finished ? (
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

            { finished ? (

                <div>

                    <h1 className="smallHeader"><br /> Title {quiz.title} <br />&nbsp;</h1>
                    <h6 className="space smallright">Question Number: {questionCount+1}/5</h6>
                    <h2 className="space">Question: {quiz.questions[0]} </h2>
                    <Button className="space answerBtn" type="submit" variant="outlined" color="primary">A: {quiz.answers[0][0]} </Button>
                    <div className="space"></div>
                    <Button className="space answerBtn" type="submit" variant="outlined" color="primary">B: {quiz.answers[0][1]} </Button>
                    <div className="space"></div>
                    <Button className="space answerBtn" type="submit" variant="outlined" color="primary">C: {quiz.answers[0][2]} </Button>
                    <div className="space"></div>
                    <Button className="space answerBtn" type="submit" variant="outlined" color="primary">D: {quiz.answers[0][3]} </Button>
                    <div className="space"></div>

                </div>

            ) : (

                <div className="smallHeader">
                <h3><br />SELECT A QUIZ<br />&nbsp;</h3>
                </div>
            )}

            <div className="space">
                {questionCount === 5 ?
                    <div>
                        <Button type="submit" onClick="" variant="outlined">Finish</Button>
                    </div>
                    :
                    <div>
                        <Button onClick={handleQuestionCount} type="submit" variant="outlined">Next</Button> &nbsp;
                </div>
                }
            </div>
        </div>

    );

}

export default PremadeQuiz;