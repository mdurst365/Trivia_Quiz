import "./assets/css_reset.css"
import "./assets/styles.css";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import dbAPI from "../utils/dbAPI";


function MakeQuiz() {

    const [count, setCount] = useState(1);
    const [formObj, setFormObj] = useState({});
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [correctAnswers, setcorrectAnswers] = useState([]);



    // const [showElement, setShowElement] = useState(false);


    // increment question number
    const handleCount = () => {
        setCount(count + 1);
    };

    // updates component state when the user types into the input field
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormObj({ ...formObj, [name]: value })
    };


    const handleClick = (event) => {

        event.preventDefault();

        var {
            inputTitle, inputCategory, 
            inputQuestion,
            inputAnswerA, inputAnswerB, inputAnswerC, inputAnswerD,
            inputCorrectAnswer
        } = formObj;

        if (count === 1) {
            setTitle(inputTitle);
            setCategory(inputCategory);
        }

        if (count < 5) {
            handleCount();
        }

        setQuestions(questions.concat(inputQuestion));
        setAnswers(answers.concat(inputAnswerA, inputAnswerB, inputAnswerC, inputAnswerD));
        setcorrectAnswers(correctAnswers.concat(inputCorrectAnswer));

        if (questions.length === 5) {

            dbAPI.createQuiz({
                // user_id:
                title: title,
                category: category,
                questions: questions,
                answers: answers,
                correct_ans: correctAnswers
            }).catch(err => console.log(err));

        }

        console.log(title);
        console.log(category);
        console.log(questions);
        console.log(answers);
        console.log(correctAnswers);

    };

    // const handleShowElement = () => {
    //     setShowElement(!showElement);
    // };

    return (
        <div className="WelcomeBox space">
            <h1 className="smallHeader"><br />MAKE A QUIZ<br />&nbsp;</h1>
            <h6 className="space smallright">Question: {count}/5</h6>
            <form>
                <h3 className="formSmall">
                    <br />
                    <div className="space">
                        Quiz Title: <input name="inputTitle" onChange={handleInputChange} type="text" placeholder="Title"></input>
                    </div>
                    <div className="space">
                        Category: <input name="inputCategory" onChange={handleInputChange} type="text" placeholder="Category"></input>
                    </div>
                    <div className="space">
                        Question: <input name="inputQuestion" onChange={handleInputChange} type="text" placeholder="Input Question"></input>
                    </div>
                    <div className="space">
                        Answer A: <input name="inputAnswerA" onChange={handleInputChange} type="text" placeholder="Answer A"></input>
                    </div>
                    <div className="space">
                        Answer B: <input name="inputAnswerB" onChange={handleInputChange} type="text" placeholder="Answer B"></input>
                    </div>
                    <div className="space">
                        Answer C: <input name="inputAnswerC" onChange={handleInputChange} type="text" placeholder="Answer C"></input>
                    </div>
                    <div className="space">
                        Answer D: <input name="inputAnswerD" onChange={handleInputChange} type="text" placeholder="Answer D"></input>
                    </div>
                    <div className="space">
                        Correct: <input name="inputCorrectAnswer" onChange={handleInputChange} type="text" placeholder="Correct Answer"></input>
                    </div>
                </h3>
            </form>
            <div className="space">

                {count === 5 ?
                    <div> <Button type="submit" variant="outlined">Back</Button> &nbsp;&nbsp;
                    <Link to="/SelectQuiz">
                            <Button onClick={handleClick} type="submit" variant="outlined">Finish</Button>
                    </Link>&nbsp;&nbsp;
                </div> :
                    <div>
                        <Button onClick={handleClick} type="submit" variant="outlined">Next</Button> &nbsp;&nbsp;
                <Button type="submit" variant="outlined">Back</Button> &nbsp;&nbsp;
                </div>
                }

            </div>
        </div>
    );
}

export default MakeQuiz;