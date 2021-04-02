import "./assets/css_reset.css"
import "./assets/styles.css";
import Button from '@material-ui/core/Button';
import { Link, Redirect } from 'react-router-dom';
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
            console.log('login successful');

            return <Redirect to="/MakeTake" />


        } catch (err) {

            // Handle error responses from the API
            if (err.response && err.response.data) console.log(err.response.data);

        }
    }

    return (
        <div className="WelcomeBox space">
            <h1 className="smallHeader"><br />WELCOME<br />&nbsp;</h1>

            <p className="space bold">NEW USERS</p>
            <p className="space">
                <Button type="submit" variant="outlined">
                    <Link to="/CreateAccount">
                        Create Account
                    </Link>
                </Button>
            </p>

            <p class="space bold">REGISTERED USERS LOGIN</p>
            <form>
                <br /><br />
                <span className="sans">Email: </span>
                <input type="username" placeholder="Email" ref={emailRef}></input>
                <br /><br />
                <span className="sans">Password: </span>
                <input type="password" placeholder="Password" ref={passwordRef}></input>

                <div className="space">
                    <Button type="submit" variant="outlined" onClick={handleSubmit}>
                        Sign In
                    </Button>
                </div>
            </form>


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