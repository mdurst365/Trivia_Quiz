import './App.css';
import FooterInfo from './components/FooterInfo';
import HeaderInfo from './components/HeaderInfo';
import Registration from './components/RegistrationForm';
import MakeTake from './components/MakeTake';
import MakeQuiz from './components/MakeQuiz';
import SelectQuiz from './components/SelectQuiz';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from './components/WelcomeBox';

function App() {
  return (
    <Router basename={ process.env.PUBLIC_URL }>
      <div className="App">
        <HeaderInfo />
        <FooterInfo />
      </div>
     <Switch>
      <Route path="/welcome" component={Welcome}/>
      <Route path="/register" component={Registration}/>
      <Route path="/maketake" component={MakeTake}/>
      <Route path="/makequiz" component={MakeQuiz}/>
      <Route path="/selectquiz" component={SelectQuiz}/>
      </Switch> 

    </Router>
  );
}

export default App;
