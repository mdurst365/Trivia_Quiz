import "./assets/css_reset.css"
import "./assets/styles.css";
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const opentdb = require('opentdb-api');
 
var options = {
    amount: 5,
    category: 'any',
    type: 'multiple'
}
 
opentdb.getTrivia(options).then(result => {
  console.log(result);
});

function RandomQuiz () {
    return (
        <div className="WelcomeBox space">
            <h1 className="smallHeader"><br />RANDOM QUIZ<br />&nbsp;</h1>
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
                    <Link to="/endquiz">
                    Next
                    </Link>
                    </Button>
                    </p>
         </div>
    );
}

export default RandomQuiz;