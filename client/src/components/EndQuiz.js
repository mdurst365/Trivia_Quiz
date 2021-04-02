import "./assets/css_reset.css"
import "./assets/styles.css"
import React from "react"
import victory from "./assets/victory.jpg"
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom';


function EndQuiz(props) {
    console.log(props.scorePass)
    return (
        <div className="WelcomeBox space">
            <h1 className="smallHeaderBlue"><br />QUIZ NAME<br />&nbsp;</h1>
            <h1 className="space bold">Score: {props.location.state.scorePass}</h1>

            <Link to="/scorescreen">
                <Button type="submit" variant="outlined">Save Name</Button>
            </Link>

            <div className="space"></div>
            <img className="imgRoundBorder" src={victory} alt="Victory"></img>
            <h6>Photo by <a href="https://unsplash.com/@japhethmast?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Japheth Mast</a> on <a href="/s/photos/victory?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></h6>
            <div className="space"></div>
            <Button type="submit" variant="outlined">Retake Quiz</Button>
                    &nbsp; &nbsp;
            <Button type="submit" variant="outlined">
                <Link to="maketake">
                    New Quiz
                    </Link>
            </Button>
            <div className="space"></div>
        </div>
    )
}

export default EndQuiz