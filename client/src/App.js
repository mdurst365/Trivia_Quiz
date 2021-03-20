import './App.css';
import FooterInfo from './components/FooterInfo';
import HeaderInfo from './components/HeaderInfo';
import Registration from './components/RegistrationForm';
import MakeTake from './components/MakeTake'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router basename={ process.env.PUBLIC_URL }>
    <div className="App">
      <HeaderInfo />
      <FooterInfo />
    </div>
    <Route path="/register" component={Registration}/>
    <Route path="/maketake" component={MakeTake}/>
    </Router>
  );
}

export default App;
