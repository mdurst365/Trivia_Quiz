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
    const [count, setCount] = useState(1);
    const [finished, setFinished] = useState(false);

    // const [question, setQuestion] = useState([]);
    // const [answer, setAnswer] = useState([]);
    // const [correctAnswer, setCorrectAnswer] = useState([]);
    // const [title, setTitle] = useState("");


    // increment question number
    const handleCount = () => {
        setCount(count + 1);
    };

    useEffect(() => {
        loadQuizes()
    }, [])

    useEffect(() => {
       setTimeout(() => setFinished(true), 6000)
    }, [quiz])

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
                console.log(quiz)
            )
            .catch(err => console.log(err));

    };

    const selectQuiz = (event) => {

        event.preventDefault();

        var id = event.currentTarget.value;
        console.log(event.currentTarget.value);

        loadQuizById(id);


        // var [

        //     questions,
        //     answers,
        //     correct_ans, 
        //     quizTitle

        // ] = quiz;

        // setQuestion(questions);
        // setAnswer(answers);
        // setCorrectAnswer(correct_ans);
        // setTitle(quizTitle);

    }

    return (

        <div className="WelcomeBox space">

            { quizes.length ? (
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
                <h3>No quizes to display</h3>
            )}

            { finished ? (

                <div>

                    <h1 className="smallHeader"><br /> Title {quiz.title} <br />&nbsp;</h1>
                    <h6 className="space smallright">Question Number: {count}/5</h6>
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

                <h3>No Quiz Selected</h3>

            )}

            <div className="space">
                {count === 5 ?
                    <div>
                        <Button type="submit" onClick="" variant="outlined">Finish</Button>
                    </div>
                    :
                    <div>
                        <Button onClick={handleCount} type="submit" variant="outlined">Next</Button> &nbsp;
                </div>
                }
            </div>
        </div>

    );

}

export default PremadeQuiz;