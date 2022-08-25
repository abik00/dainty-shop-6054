import React,{useState} from 'react'
import {Link} from "react-router-dom"
import "./Navbar.css";


const Navbar = () => {
  return (
    <>
    <nav className="navbar">
        <div className="navbar-contaniner">
            <Link to="/" className="navbar-logo">
                <img src='https://1000logos.net/wp-content/uploads/2022/05/Buffer-Logo.png'/>
            </Link>
        </div>
    </nav>
    </>
  )
}

export default Navbar
