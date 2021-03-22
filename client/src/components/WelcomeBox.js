import "./assets/css_reset.css";
import "./assets/styles.css";
import { Link } from 'react-router-dom';


function WelcomeBox() {
    return (
        <div>
            <br /><br />
            <div className="WelcomeBox">
            
            <h1 class="smallHeader">
            <Link className="link" to="/register">
                <br />Start &#10142;
                <br />&nbsp;
                </Link>
                </h1>
            </div>
        </div>
    );
}

export default WelcomeBox;