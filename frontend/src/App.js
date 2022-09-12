import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from "./components/Home";
import Header from "./components/Header"
import About from './About';
import Contact from './components/Contact';
import Account from "./components/Login"
function App() {
  return (
   <div>
    <Router>
    <Header/>
   
   <Routes>
     <Route  path="/" element={<Home/>} />
     
     <Route  path="/" element={<About/>} />
       </Routes>
      <Routes>
     <Route  path="/contact" element={<Contact/>} />
     <Route  path="/about" element={<About/>} /> 
     
     <Route  path="/account" element={<Account/>} /> 
     </Routes>
   </Router></div>
  );
}

export default App;
