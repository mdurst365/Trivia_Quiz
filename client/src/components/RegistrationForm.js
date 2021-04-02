import "./assets/css_reset.css"
import "./assets/styles.css";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import dbAPI from "../utils/dbAPI";

import React, { useRef } from "react";
import { useLogin } from "../utils/auth"


function Registration() {
    const emailRef = useRef();
    const passwordRef = useRef();

    // Get the helper login function from the `useLogin` hook.
    const login = useLogin();

    const handleSubmit = async e => {
        e.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        try {

            await login({ email, password });

            // User has been successfully logged in and added to state. Perform any additional actions you need here such as redirecting to a new page.

        } catch (err) {

            // Handle error responses from the API
            if (err.response && err.response.data) console.log(err.response.data);

        }
    }

    return (
        <div className="WelcomeBox space">
            <h1 class="smallHeader"><br />WELCOME<br />&nbsp;</h1>

            <p class="space bold">NEW USERS</p>
            <p className="space">
                <Button type="submit" variant="outlined">
                    <Link to="/CreateAccount">
                        Create Account
                    </Link>
                </Button>
            </p>
            <p class="space bold">REGISTERED USERS LOGIN</p>
            <form>
                <br />
                <span className="sans">Username: </span>
                <input type="username" placeholder="Username"
                    onChange={event => {
                        setUsername(event.target.value)
                    }} >
                </input>

                <br /><br />
                <span className="sans">Password: </span>
                <input type="password" placeholder="Password"
                    onChange={(event) => { setPassword(event.target.value) }}

                ></input>
            </form>
            <p className="space">
                <Button type="submit" variant="outlined" >
                    <Link to="/MakeTake">
                        Sign In
                    </Link>
                </Button>
            </p>

            <p className="space bold">LOGIN AS GUEST
                <br /><br />
                <Button type="submit" variant="outlined">
                    <Link to="/MakeTake">
                        Login
                    </Link>
                </Button></p>
        </div>
    );
}

export default Registration;