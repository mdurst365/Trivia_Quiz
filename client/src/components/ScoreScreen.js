import "./assets/css_reset.css"
import "./assets/styles.css"
import React from "react"
import confetti from "./assets/confetti.jpg"
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom';

function ScoreScreen (){
    return (
        <div className="WelcomeBox space">
            <h1 className="smallHeaderBlue"><br />MY SCORES<br />&nbsp;</h1>
            <div className="flex-container bold">
                  <div>Name</div>
                    <div>Score</div>
                    <div>Attempts</div>  
            </div>
            <div className="space"></div>
            <img className="imgRoundBorder" src={ confetti } alt="Confetti"></img>
            <h6>Photo by <a href="https://unsplash.com/@ninjason?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jason Leung</a> on <a href="/s/photos/celebrate?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  </h6>
            <div className="space"></div>
            <Link to="/register">
                <Button type="submit" variant="outlined">Play Again</Button>
            </Link>
            <div className="space"></div>
        </div>
    )
}

export default ScoreScreen