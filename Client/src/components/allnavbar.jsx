import React from 'react';
import './allnav.css'
import { Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='headerr'>
        <div className="loggo">
            <img src="logo.png" alt="" />
        </div>
        <div className="navvbar">
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
    )
    }
    export default Navbar;