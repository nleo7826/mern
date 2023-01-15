import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './components/pages/About';
import Demo from './components/pages/Demo';
import SignUp from './components/pages/SignUp';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/demo' element={<Demo />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
