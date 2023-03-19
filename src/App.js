import './App.css';
import homeLogo from './img/homewhite.png';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Address from './Components/Address';
import Home from './Components/Home';
import Skills from './Components/Skills';
import PersonalInfo from './Components/Personalnfo';
import Contact from './Components/Contact';
import React from 'react';


class App extends React.Component {

  render() {
    return (
      <div id="App" className="App">
        <BrowserRouter>
          <header className="App-header">
            <nav id="nav-menu" className='nav-menu'>
              <Link className='nav-link scale' to="/"><img src={homeLogo} alt="Home logo"/></Link>
              <Link className='nav-link scale' to="/about">About</Link>
              <Link className='nav-link scale' to="/address">Address</Link>
              <Link className='nav-link scale' to="/skills">Skills</Link>
              <Link className='nav-link scale' to="/personalinfo">Personal Info</Link>
              <Link className='nav-link scale' to="/contact">Contact</Link>
            </nav>
          </header>
          <Routes>
            <Route path="/" element={<Home/>}></Route> 
            <Route path="/about" element={<About/>}></Route>
            <Route path="/address" element={<Address/>}></Route>
            <Route path="/skills" element={<Skills/>}></Route>
            <Route path="/personalinfo" element={<PersonalInfo/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    ); 
  }
}

export default App;
