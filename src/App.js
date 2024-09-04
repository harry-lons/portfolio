import './App.scss';
import Home from './home/index.js';

function App() {
  const mystring = process.env.REACT_APP_TESTVAR;
  console.log("test string:", mystring);
  return (
    <div className="App">
      <div className="App-header">
        <Home />
      </div>
    </div>
  );
}

export default App;
