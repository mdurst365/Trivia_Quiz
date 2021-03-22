import "./assets/css_reset.css"
import "./assets/styles.css";
import React from "react";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

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

        <p className="space">
            <Button type="submit" variant="outlined" color="primary">
            <Link to="/randomquiz"> Random Quiz</Link>
                </Button>
        </p>
        

        <p className="space"><Button type="submit" variant="outlined" color="primary">Pre-Made Quiz</Button></p>
        <div className="space"></div>
        Quiz ID: <input type="text" placeholder="Quiz ID"></input>
        </h3>
        <div className="space"></div>
        </div>
    )
}

export default SelectQuiz;