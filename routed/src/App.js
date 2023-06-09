import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import About from './components/About';
import HomePage from './components/HomePage';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/" className='nav-item'>Home</Link>
        <Link to="/about" className='nav-item'>About</Link>
        <Link to="/contact" className='nav-item'>Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
