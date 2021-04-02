import "./assets/css_reset.css"
import "./assets/styles.css";
import React from "react";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import likes from "./assets/likes.jpg"



function Succeeded() {
    return (
        <div className="WelcomeBox space">
            <h1 className="smallHeaderBlue"><br />Account Created<br />&nbsp;</h1>
            <h2 className="bold space">Great job!</h2>
            <img className="imgRoundBorder" src={likes} alt="Lots of Likes"></img>
            <h6><a href="https://www.vecteezy.com/free-vector/web">Free Use Web Vectors by Vecteezy</a></h6>
            <p className="space">
                <Button type="submit" variant="outlined" >
                    <Link to="/register">
                        Sign In
                    </Link>
                </Button>
            </p>

        </div>
    )
}

export default Succeeded;