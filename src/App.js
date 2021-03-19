import './App.css';
import HeaderInfo from "./components/HeaderInfo"
// Import the useAuthTokenStore hook.
import { useAuthTokenStore } from "./utils/auth";

function App() {
  // Use the hook to reauthenticate stored tokens.
  useAuthTokenStore();

  return (
    <div className="App">
      <HeaderInfo/>
    </div>
  );
}

export default App;
