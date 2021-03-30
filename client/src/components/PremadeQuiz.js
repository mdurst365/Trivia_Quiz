import "./assets/css_reset.css"
import "./assets/styles.css";
// import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

function PremadeQuiz() {
    return (

        

        <div className="WelcomeBox space">
            <h1 className="smallHeader"><br />Quiz Title<br />&nbsp;</h1>
            <h6 className="space smallright">Question: 1/5</h6>
            <h2 className="space">Question: Update with dynamic info </h2>
            <Button className="space answerBtn" type="submit" variant="outlined" color="primary">Answer A:</Button>
            <div className="space"></div>
            <Button className="space answerBtn" type="submit" variant="outlined" color="primary">Answer B:</Button>
            <div className="space"></div>
            <Button className="space answerBtn" type="submit" variant="outlined" color="primary">Answer C:</Button>
            <div className="space"></div>
            <Button className="space answerBtn" type="submit" variant="outlined" color="primary">Answer D:</Button>
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

export default PremadeQuiz;