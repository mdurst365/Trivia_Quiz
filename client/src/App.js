import './App.css';
import FooterInfo from './components/FooterInfo';
import HeaderInfo from './components/HeaderInfo';
import WelcomeBox from './components/WelcomeBox';

function App() {
  return (
    <div className="App">
      <HeaderInfo />
      <WelcomeBox />
      <FooterInfo />
    </div>
  );
}

export default App;
