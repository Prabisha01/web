import React, { useEffect, useState } from 'react';
import {Nav} from 'react-bootstrap';
import { Link , useNavigate} from 'react-router-dom';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import img1 from '../images/logo.png';



const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('user'));

 

  

    //logout function
    const navigate = useNavigate()
    const handlelogout = (e) => {
      e.preventDefault()
      localStorage.clear()
      navigate('/home')

    }
  return (
    <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor : "#2b7509"}}>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link  text-white fs-5  me-3"  to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fs-5  me-3" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fs-5  me-3" to="/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fs-5  me-3" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fs-5  me-3" to="/about">About Us</Link>
            </li>
          </ul>
      </div>
      
      </div>
    </nav>
  );

  }

export default Navbar;
