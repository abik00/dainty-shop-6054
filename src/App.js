
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter } from "react-router-dom"
import { Routes,Route } from "react-router-dom"
import Home from './components/pages/Home';
import Customers from './components/pages/Customers';
import About from './components/pages/About';



function App() {

  return <BrowserRouter>
  <Navbar/>
  {/* <Routes>
    <Route exact path ='/' component={Home}></Route>
    <Route exact path ='/' component={Home}></Route>

  </Routes> */}
  <Home/>

  
  </BrowserRouter>;
}

export default App;
