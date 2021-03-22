import "./assets/css_reset.css"
import "./assets/styles.css";
import React from "react";
import Button from '@material-ui/core/Button';

function RandomQuiz () {
    return (
        <div className="WelcomeBox space">
            <h1 class="smallHeader"><br />RANDOM QUIZ<br />&nbsp;</h1>
            <h6 className="space smallright">Question: 1/5</h6>
            <h2 className="space">Question: Update with dynamic info </h2>
            <p className="space answerBtn">Answer A:</p>
            <div className="space"></div>
            <p className="space answerBtn">Answer B:</p>
            <div className="space"></div>
            <p className="space answerBtn">Answer C:</p>
            <div className="space"></div>
            <p className="space answerBtn">Answer D:</p>
            <div className="space"></div>

            <p className="space">
                <Button type="submit" variant="outlined" color="primary">
                    Next
                    </Button>
                    </p>
         </div>
    );
}

export default RandomQuiz;