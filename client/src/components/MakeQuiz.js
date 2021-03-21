import "./css_reset.css"
import "./styles.css";
import Button from '@material-ui/core/Button';
import { Dropdown } from 'semantic-ui-react';

function MakeQuiz() {
    return (
        <div className="WelcomeBox space">
            <h1 class="smallHeader"><br />MAKE A QUIZ<br />&nbsp;</h1>
            <h5 className="space smallright">Question: 1/5</h5>
                <form>
                    <h3 className="formSmall">
                    <br/>
                    Category: <input type="text" placeholder="Category"></input>
                    <br/><br/>
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
                <Button type="submit" variant="outlined">Next</Button>
                </div>
                </div>
    );
}

export default MakeQuiz;