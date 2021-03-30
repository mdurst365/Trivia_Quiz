import React, { useState } from "react";
import "./assets/css_reset.css";
import "./assets/styles.css";
import axios from 'axios';

import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { API_BASE_URL, ACCESS_TOKEN_NAME } from '../constants/apiConstants';


function CreateAccount(props) {
    const [state, setState] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        successMessage: null
    });


    // const [enteredPassword, setEnteredPassword] = useState("");
    const handlechange = e => {
        const { id, value } = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    };
    const sendDetailsToServer = () => {
        if (state.email.length && state.password.length) {
            props.showError(null);
            const payload = {
                "email": state.email,
                "password": state.password,
            }
            axios.post(API_BASE_URL + '/user/register', payload)
                .then(function (response) {
                    if (response.status === 200) {
                        setState(prevState => ({
                            ...prevState,
                            'successMessage': 'Registration successful. Redirecting to home page..'
                        }))
                        localStorage.setItem(ACCESS_TOKEN_NAME, response.data.token);
                        redirectToHome();
                        props.showError(null)
                    } else {
                        props.showError("Some error ocurred");
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            props.showError('Please enter valid username and password')
        }

    }
    const redirectToHome = () => {
        props.updateTitle('Home')
        props.history.push('/home');
    }
    const redirectToLogin = () => {
        props.updateTitle('Login')
        props.history.push('/login');
    }
    const handleSubmitClick = (e) => {
        e.preventDefault();
        if (state.password === state.confirmPassword) {
            sendDetailsToServer()
        } else {
            props.showError('Passwords do not match');
        }
    }
    return (
        <div className="WelcomeBox space">
            <form>
                <h1 className="smallHeader"><br />WELCOME NEW USER<br />&nbsp;</h1>
                <p className="space bold">CREATE YOUR ACCOUNT</p>
                {/* <form onSubmit={handleSubmit}> */}
                <br />
                    Email Address: <input type="email" placeholder="Enter Email"
                    value={state.email}
                    onChange={handlechange}
                />


                <br /><br />
                    Password: <input type="password" placeholder="Password"
                    value={state.email}
                    onChange={handlechange}
                />
                <br /><br />
                    Password: <input type="password" placeholder="comfirm Password"
                    value={state.confirmPassword}
                    onChange={handlechange}
                />



                <p className="space">
                    <Link to="/register">
                        <Button type="submit" variant="outlined"
                            onClick={handleSubmitClick}
                        >
                            register
                </Button></Link>
                </p>
            </form>


        </div>
    );
}

export default CreateAccount;