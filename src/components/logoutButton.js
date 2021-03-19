import React from 'react';
import "./styles.css";

// basic logout button that we can change to meet our needs later on

function LogoutButton() {

    const logout = useLogout();

    return <button onClick={logout}>Logout</button>

}