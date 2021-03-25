import "./assets/css_reset.css"
import "./assets/styles.css";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";



function MakeQuiz() {
    const [count, setCount] = useState(1);
    const [formObj, setFormObj] = useState({});

    // updates component state when the user types into the input field
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormObj({ ...formObj, [name]: value })
        console.log(setFormObj);
    };

    const handleClick = () => {
        setCount(count+1);
    };

    return (
        <div className="WelcomeBox space">
            <h1 class="smallHeader"><br />MAKE A QUIZ<br />&nbsp;</h1>
            <h6 className="space smallright">Question: {count}/5</h6>
            <form>
                <h3 className="formSmall">
                    <br />
                    Category: <input type="text" placeholder="Category"></input>
                    <div className="space"></div>
                    Question: <input type="text" placeholder="Input Question"></input>
                    <div className="space">
                        Answer A: <input type="text" placeholder="Answer A"></input>
                    </div>
                    <div className="space">
                        Answer B: <input type="text" placeholder="Answer B"></input>
                    </div>
                    <div className="space"></div>
                    Answer C: <input type="text" placeholder="Answer C"></input>
                    <div className="space"></div>
                    Answer D: <input type="text" placeholder="Answer D"></input>
                    <div className="space"></div>
                    Correct: <input type="text" placeholder="Correct Answer"></input>
                </h3>
            </form>
            <div className="space">
                {/* <Link to="/makequizfinish"> */}
                    <Button onClick={handleClick} type="submit" variant="outlined">Next</Button>
                {/* </Link> */}
            </div>
        </div>
    );
}

export default MakeQuiz;