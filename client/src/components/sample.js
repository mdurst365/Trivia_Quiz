function LoginForm() {

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

        } catch(err) {

             // Handle error responses from the API
             if( err.response && err.response.data ) console.log(err.response.data);

        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input type="text" ref={emailRef} placeholder="Your email" /><br />
            <input type="password" ref={passwordRef} placeholder="Your password" /><br />
            <button>Submit</button>
        </form>
    )

}

function RegistrationForm() {

    const emailRef = useRef();
    const passwordRef = useRef();

    // Get the helper login function from the `useLogin` hook.
    const login = useLogin();

    const handleSubmit = async e => {
        e.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        try {

            // Register the user.
            await api.register({ email, password });

            // User has been successfully registered, now log them in with the same information.
            await login({ email, password });

            // User has been successfully registered, logged in and added to state. Perform any additional actions you need here such as redirecting to a new page.

        } catch(err) {

             // Handle error responses from the API. This will include
             if( err.response && err.response.data ) console.log(err.response.data);
             
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <input type="text" ref={emailRef} placeholder="Your email" /><br />
            <input type="password" ref={passwordRef} placeholder="Your password" /><br />
            <button>Submit</button>
        </form>
    )

}

<PrivateRoute exact path="/members" redirectTo="/login" component={Members} />

<GuestRoute exact path="/register" redirectTo="/members" component={Register} />

{/* Routes open to all users */}
<Route path="/" exact component={HomePage} />
<Route path="/about" exact component={AboutPage} />
<Route path="/privacy" exact component={PrivacyPolicyPage} />

{/* Routes for guest (non authenticated) users */}
<GuestRoute exact path="/login" redirectTo="/members" component={LoginPage} />
<GuestRoute exact path="/register" redirectTo="/members" component={RegisterPage} />

{/* Routes for (authenticated) users */}
<PrivateRoute exact path="/members" redirectTo="/login" component={MembersPage} />

function MyNavBar() {

    const isAuthenticated = useIsAuthenticated();

    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            {!isAuthenticated && <Link to="/register">Register</Link>}
            {!isAuthenticated && <Link to="/login">Login</Link>}
            {isAuthenticated && <LogoutButton>}
        </div>
    );
}

function Profile() {

const user = useAuthenticatedUser();

return user && (
    <div>
        <h2>My Profile</h2>
        <p>
            <strong>Email:</strong>
            {user.email}
        </p>
    </div>
);
}