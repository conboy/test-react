import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import About from './components/About';
import HomePage from './components/HomePage';
import Contact from './components/Contact';
import Sound from './components/Sound';
import MapList from './components/MapList';
import Register from './components/Register';

const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/" className='nav-item'>Home</Link>
        <Link to="/about" className='nav-item'>About</Link>
        <Link to="/contact" className='nav-item'>Contact</Link>
        <Link to="/sound" className='nav-item'>Sound</Link>
        <Link to="/list" className='nav-item'>List</Link>
        <Link to="/register" className='nav-item'>Sign Up</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/sound" element={<Sound />}></Route>
        <Route path="/list" element={<MapList data={desserts}/>}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>

      
    </div>
  );
}

export default App;
