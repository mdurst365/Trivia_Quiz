import "./assets/css_reset.css"
import "./assets/styles.css";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

function Registration() {
    return (
        <div className="WelcomeBox space">
            <h1 class="smallHeader"><br />WELCOME<br />&nbsp;</h1>
            <p class="space bold">REGISTERED USERS</p>
            <form>
                <br />
                    Username: <input type="username" placeholder="Username"></input>
                <br /><br />
                    Password: <input type="password" placeholder="Password"></input>
            </form>
            <p className="space">
                <Button type="submit" variant="outlined">
                    <Link to="/MakeTake">
                        Sign In
                    </Link>
                </Button>
            </p>
            <p className="space">
                <Button type="submit" variant="outlined">
                    <Link to="/CreateAccount">
                        Create Account
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