import "./assets/css_reset.css"
import "./assets/styles.css";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import React from "react";

function Registration() {

    return (
        <div className="WelcomeBox space">
            <h1 class="smallHeader"><br />WELCOME<br />&nbsp;</h1>


            <p class="space bold">REGISTERED USERS LOGIN</p>
            <form>
                <br />
                <span className="sans">Username: </span>
                <input type="username" placeholder="Username">
                </input>

                <br /><br />
                <span className="sans">Password: </span>
                <input type="password" placeholder="Password"></input>
            </form>
            <p className="space">
                <Button type="submit" variant="outlined" >
                    <Link to="/MakeTake">
                        Sign In
                    </Link>
                </Button>
            </p>

            <p class="space bold">DON'T HAVE AN ACCOUNT?</p>
            <p className="space">
                <Button type="submit" variant="outlined">
                    <Link to="/CreateAccount">
                        Sign Up Now
                    </Link>
                </Button>
            </p>

            <p className="space bold">LOGIN AS GUEST
                <br /><br />
                <Button type="submit" variant="outlined">
                    <Link to="/takequiz">
                        Guest Login
                    </Link>
                </Button></p>
        </div>
    );
}

export default Registration;