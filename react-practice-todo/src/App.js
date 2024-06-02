import logo from './logo.svg';
import './App.css';
import Top from "./Top";
import Welcome from "./Welcome";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Link to="/">Welcome</Link> | <Link to="/top">Top</Link>
        </p>
        <Routes>
          <Route path="/top" element={<Top />} />
          <Route path="*" element={<Welcome />} />
        </Routes>
      </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
