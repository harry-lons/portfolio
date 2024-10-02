import './App.scss';
import Home from './home/index.js';
import Contact from './contact/index.js';
import { Routes, Route } from 'react-router-dom';

function App() {
  const mystring = process.env.REACT_APP_TESTVAR;
  console.log("test string:", mystring);
  return (
    <div className="App">
      <div className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
