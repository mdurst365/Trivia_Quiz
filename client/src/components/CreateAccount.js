import React, { useState } from "react";
import "./assets/css_reset.css";
import "./assets/styles.css";
import Button from '@material-ui/core/Button';
import axios from 'axios';

import { Link } from 'react-router-dom';

function CreateAccount() {
    const [userNameRegistered, setUserNameRegestered] = useState("");
    const [passwordRegistered, setPasswordRegestered] = useState("");
    const register = () => {
        axios.post("http://localhost3001/register", {
            username: userNameRegistered,
            password: passwordRegistered
        }).then(res => {
            console.log(res)
        })
    };
    return (
        <div className="WelcomeBox space">
            <h1 className="smallHeader"><br />WELCOME NEW USER<br />&nbsp;</h1>
            <p className="space bold">CREATE YOUR ACCOUNT</p>
            <form>
                <br />
                   <span className="sans"> Username: </span> 
                   <input type="username" placeholder="Username"
                    onChange={(event) => 
                    { setUserNameRegestered(event.target.value) }}>      
                    </input>

                <br /><br />
                    <span className="sans">Password: </span><input type="password" placeholder="Password"
                    onChange={(event) => { setPasswordRegestered(event.target.value) }}
                >

                </input>

                <p className="space">
                    <Link to="/register">
                        <Button type="submit" variant="outlined" onClick={register}>
                            submit
                </Button></Link>
                </p>
            </form>


        </div>
    );
}

export default CreateAccount;