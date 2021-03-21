import "./css_reset.css"
import "./styles.css";
import React from "react";
import Button from '@material-ui/core/Button';

function SelectQuiz () {
    return (
        <div className="WelcomeBox space">
        <h1 class="smallHeader"><br />SELECT QUIZ<br />&nbsp;</h1>  
        <br/>
        <h3>
        Category: <input type="text" placeholder="Category"></input>
        <div className="space"></div>
        Difficulty: <input type="text" placeholder="Difficulty"></input>
        <div className="space"></div>
        </h3>
        <p className="space"><Button type="submit" variant="outlined" color="primary">Random Quiz</Button></p>
        <p className="space"><Button type="submit" variant="outlined" color="primary">Pre-Made Quiz</Button></p>
        </div>
    )
}

export default SelectQuiz;