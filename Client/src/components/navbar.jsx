import React from 'react';
import './navbar.css'
import { Link} from 'react-router-dom';
import Slider from './slider';


const Navbar = () => {
  return (
  
  <div className="maindiv">
    <div className='header'>
        <div className="logo">
            <img src="logo.png" alt="" />
        </div>
        <div className="navbar">
            <ul>
                <Link to ={'/'}> <li>HOME</li></Link>
                <Link to ={'/menu'}> <li>MENU</li></Link>
                <Link to ={'/reservation'}> <li>RESERVATION</li></Link>
                <Link to ={'/gallery'}> <li>GALLERY</li></Link>
                <Link to ={'/about'}> <li>ABOUT</li></Link>
                <Link to ={'/blog'}> <li>BLOG</li></Link>
                
            </ul>
        </div>
    </div>
    <div className="slide">
    <Slider/>
    </div>
    <div className="content">
      <h4>Welcome to</h4>
      <h2>Cuisine</h2>
     <button>Look MENU</button>
    </div>


    </div>
   
  )
}

export default Navbar;
