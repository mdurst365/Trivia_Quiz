import "./css_reset.css"
import "./styles.css";
import Button from '@material-ui/core/Button';

function Registration() {
    return (
        <div className="WelcomeBox space">
            <h1 class="smallHeader"><br />WELCOME<br />&nbsp;</h1>
                <p class="space bold">REGISTERED USERS</p>
                <form>
                    <br/>
                    Username: <input type="username" placeholder="Username"></input>
                    <br/><br/>
                    Password: <input type="password" placeholder="Password"></input>
                </form>
                <p className="space"><Button type="submit" variant="outlined">Sign In</Button></p>
                <p className="space bold">LOGIN AS GUEST
                <br/><br/>
                <Button type="submit" variant="outlined">Login</Button></p>
                </div>
    );
}

export default Registration;