import React, { useState } from "react";
import "./assets/css_reset.css";
import "./assets/styles.css";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

function CreateAccount() {
    const [enteredUserName, setEnteredUserName] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        console.log("username is " + enteredUserName);
        console.log("password is " + enteredPassword);
    };
    return (
        <div className="WelcomeBox space">
            <h1 className="smallHeader"><br />WELCOME<br />&nbsp;</h1>
            <p className="space bold">Create Your Account</p>
            <form onSubmit={handleSubmit}>
                <br />
                    Username: <input type="username" placeholder="Username"
                    onChange={event => {
                        setEnteredUserName(event.target.value)
                    }}></input>
                <br /><br />
                    Password: <input type="password" placeholder="Password"
                    onChange={event => {
                        setEnteredPassword(event.target.value)
                    }}
                >
                </input>
                <p className="space">
                    <Button type="submit" variant="outlined">
                        submit
                </Button>
                </p>
            </form>


        </div>
    );
}

export default CreateAccount;