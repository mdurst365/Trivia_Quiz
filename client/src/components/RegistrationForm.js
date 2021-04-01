import "./assets/css_reset.css"
import "./assets/styles.css";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import dbAPI from "../utils/dbAPI";

import React, { useState, useEffect, useRef } from "react";
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


            <p class="space bold">REGISTERED USERS LOGIN</p>
            <form onSubmit={handleSubmit}>
                <br />
                <span className="sans"> Username: </span>
                <input type="text" ref={emailRef} placeholder="email"></input>
                <br /><br />
                <span className="sans"> Password: </span>
                <input type="password" ref={passwordRef} placeholder="Password"></input>
                <br></br>
                <br></br>
                <button>Submit</button>
            </form>

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
                    <Link to="/MakeTake">
                        Login
                    </Link>
                </Button></p>
        </div>
    );
}

export default Registration;