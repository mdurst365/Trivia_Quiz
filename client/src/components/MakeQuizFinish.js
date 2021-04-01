import "./assets/css_reset.css"
import "./assets/styles.css";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

function MakeQuizFinish() {
    return (
        <div className="WelcomeBox space">
            <h1 class="smallHeader"><br />MAKE A QUIZ<br />&nbsp;</h1>
            <h6 className="space smallright">Question: 5/5</h6>
                <form>
                    <h3 className="formSmall">
                    <br/>
                    Category: <input type="text" placeholder="Category"></input>
                    <div className="space"></div>
                    Question: <input type="text" placeholder="Input Question"></input>
                    <div className="space">
                    Answer A: <input type="text" placeholder="Answer A"></input>
                    </div>
                    <div className="space">
                    Answer B: <input type="text" placeholder="Answer B"></input>
                    </div>
                    <div className="space"></div>
                    Answer C: <input type="text" placeholder="Answer C"></input>
                    <div className="space"></div>
                    Answer D: <input type="text" placeholder="Answer D"></input>
                    <div className="space"></div>
                    Correct: <input type="text" placeholder="Correct Answer"></input>
                    </h3>
                </form>
                <div className="space">
                    <Link to="makequiz">
                <Button className="bump" type="submit" variant="outlined">Back</Button>
                </Link>
                &nbsp; &nbsp;
                <Link to="/selectquiz">
                <Button type="submit" variant="outlined">Finish</Button>
                </Link>
                </div>
                </div>
    );
}

export default MakeQuizFinish;