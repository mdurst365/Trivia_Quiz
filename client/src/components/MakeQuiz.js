import "./assets/css_reset.css"
import "./assets/styles.css";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";



function MakeQuiz() {

    const [count, setCount] = useState(1);
    const [formObj, setFormObj] = useState({});
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


    const handleNext = (event) => {
        
        event.preventDefault();

        handleCount();

        const {answerA, answerB, answerC, answerD, question, correctAnswer} = formObj;

        setQuestions(questions.concat(question));
        setAnswers(answers.concat(answerA, answerB, answerC, answerD));
        setcorrectAnswers(correctAnswers.concat(correctAnswer));

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
                        Quiz Title: <input name="title" onChange={handleInputChange} type="text" placeholder="Title"></input>
                    </div>
                    <div className="space">
                        Category: <input name="category" onChange={handleInputChange} type="text" placeholder="Category"></input>
                    </div>
                    <div className="space">
                        Question: <input name="question" onChange={handleInputChange} type="text" placeholder="Input Question"></input>
                    </div>
                    <div className="space">
                        Answer A: <input name="answerA" onChange={handleInputChange} type="text" placeholder="Answer A"></input>
                    </div>
                    <div className="space">
                        Answer B: <input name="answerB" onChange={handleInputChange} type="text" placeholder="Answer B"></input>
                    </div>
                    <div className="space">
                        Answer C: <input name="answerC" onChange={handleInputChange} type="text" placeholder="Answer C"></input>
                    </div>
                    <div className="space">
                        Answer D: <input name="answerD" onChange={handleInputChange} type="text" placeholder="Answer D"></input>
                    </div>
                    <div className="space">
                        Correct: <input name="correctAnswer" onChange={handleInputChange} type="text" placeholder="Correct Answer"></input>
                    </div>
                </h3>
            </form>
            <div className="space">

                {count === 5 ? 
                <div> <Button type="submit" variant="outlined">Back</Button> &nbsp;&nbsp;
                <Link to="/selectquiz">
                <Button type="submit" variant="outlined">Finish</Button> 
                </Link>&nbsp;&nbsp;
                </div>:
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