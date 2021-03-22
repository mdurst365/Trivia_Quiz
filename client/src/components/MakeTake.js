import "./css_reset.css"
import "./styles.css";
import Button from '@material-ui/core/Button';
import questions from "./assets/questions.jpg"
import { Link } from 'react-router-dom';

function MakeTake() {
    return (
        <div>
            <br /><br />
            <div className="WelcomeBox">
            <h1 class="smallHeader"><br />MAKE OR TAKE A QUIZ<br />&nbsp;</h1>
            <p className="space">
                <Button type="submit" variant="outlined" color="primary">
                    <Link to="/makequiz">
                    Make Your Own Quiz
                    </Link>
                    </Button>
                    </p>
            
            <p className="space">
                <Button type="submit" variant="outlined" color="primary">
                    Take a Random Quiz
                    </Button>
                    </p>

            <img className="questionImg" src={ questions } alt="Quiz Questions"></img>
            <h6>Free Use Photo by Olya Kobruseva from Pexels</h6>            
            
            <p className="space"><Button type="submit" variant="outlined" color="primary">View Scores</Button></p>
            </div>
        </div>
    );
}

export default MakeTake;