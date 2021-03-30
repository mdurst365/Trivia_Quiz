import "./assets/css_reset.css"
import "./assets/styles.css";
import Button from '@material-ui/core/Button';
import React, { useState } from "react";
import dbAPI from "../utils/dbAPI";
import { Link } from 'react-router-dom';


function Registration() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const login = () => {
        dbAPI.createUser({
            email: email,
            password: password
        }).then(res => {
            console.log(res)
        })
    };

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
                    Username: <input type="email" placeholder="email"
                    onChange={event => {
                        setEmail(event.target.value)
                    }} ></input>
                <br /><br />
                    Password: <input type="password" placeholder="Password" onChange={event => {
                    setPassword(event.target.value)
                }}
                ></input>
            </form>
            <p className="space">
                <Button type="submit" variant="outlined" onClick={login}>
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