// src/Footer.js
import React from 'react';
import './footer.css'; 

import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer">
    <div className="footermain">
      <div className="footerone">
        <h1>CONTACT US</h1><br />
        <h2> Multan, Pakistan</h2>
        <h2> (+92) 312 76 36492</h2>
        <h2> contact@site.com</h2> <br /><br /><br />
        <h1>OPENING TIME</h1><br />
        <h2>09:30 AM – 11:00 PM</h2>
        <h2>Every Day</h2>
      </div>
      <div className="footertwo">
        <h4>LATEST TWITTER</h4> <br />
       <Link to={'/'}> <h6>@ZUNAIRA</h6> </Link> 
       <p>Activello is a good option. It has a slider built into that displays the featured image in the slider.</p>
      </div>
      <div className="footerthree">
        <div className="footerimg">
          <img src="photo-gallery-thumb-01.jpg" alt="" />
          <img src="photo-gallery-thumb-02.jpg" alt="" />
          <img src="photo-gallery-thumb-03.jpg" alt="" />
          <img src="photo-gallery-thumb-04.jpg" alt="" />
        </div>
        <div className="footerimgg">
        <img src="photo-gallery-thumb-05.jpg" alt="" />
        <img src="photo-gallery-thumb-06.jpg" alt="" />
        <img src="photo-gallery-thumb-07.jpg" alt="" />
        <img src="photo-gallery-thumb-08.jpg" alt="" />
        </div>
        <div className="footerimage">
        <img src="photo-gallery-thumb-09.jpg" alt="" />
        <img src="photo-gallery-thumb-10.jpg" alt="" />
        <img src="photo-gallery-thumb-11.jpg" alt="" />
        <img src="photo-gallery-thumb-12.jpg" alt="" />
        </div>

      </div>
    </div>
      <div className="footer-bottom">
        <p>© 2025 My Website. All Rights Reserved.   | This website is made by ZUNAIRA</p>
      </div>
    </footer>
  );
};

export default Footer;
