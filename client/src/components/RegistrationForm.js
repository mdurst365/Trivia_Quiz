import "./assets/css_reset.css"
import "./assets/styles.css";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

function Registration() {
    return (
        <div className="WelcomeBox space">
            <h1 class="smallHeader"><br />WELCOME<br />&nbsp;</h1>
<<<<<<< HEAD
            <p class="space bold">REGISTERED USERS</p>
            <form>
                <br />
=======
                <p class="space bold">LOG-IN OR SIGN UP</p>
                <form>
                    <br/>
>>>>>>> c2e81eab28a3da07307772ea06e59d663e9fe7ab
                    Username: <input type="username" placeholder="Username"></input>
                <br /><br />
                    Password: <input type="password" placeholder="Password"></input>
            </form>
            <p className="space">
                <Button type="submit" variant="outlined">
                    <Link to="/MakeTake">
<<<<<<< HEAD
                        Sign In
=======
                    Register
                    </Link>
                    </Button>
                    </p>
                    <p className="space">
                    <Button type="submit" variant="outlined">
                    <Link to="/MakeTake">
                    Sign In
>>>>>>> c2e81eab28a3da07307772ea06e59d663e9fe7ab
                    </Link>
                </Button>
            </p>
            <p className="space">
                <Button type="submit" variant="outlined">
                    <Link to="/MakeTake">
                        Logout
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