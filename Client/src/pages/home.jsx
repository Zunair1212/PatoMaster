import React from 'react';
import List from '../components/card';
import Navbar from '../components/navbar';
import VideoSection from '../components/videosection';
import Homecomp from '../components/homecomp';
const Home = () => {
  return (
    <>
      <Navbar/>
    <div className="maincon">
    <div className='cont'>
      <div className="homesec">
      <h2><i>Italian Restaurant</i></h2>
      <h1>Welcome</h1>
      <p>Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.</p>

      </div>
        <div className="homesecc">
          <img 
          src="homesec.jpg" alt=""  className='zoomimage'/>
        </div>
    </div>
    <div className="section">
    <div className="secsection">
      <h3><i>Discover</i></h3>
      <h1>Cuisine</h1>
    </div>
    </div>
    <List/>
    <div className="thirdsec">
      <h3>DIScOVER</h3>
      <h1>OUR MENU</h1>
      <div className="thirdsect">
        <div className="third1">
          <img src="lunch.webp" alt="" />
          <button>LUNCH</button>
        </div>
        <div className="third2">
          <img src="dinner1.jpg" alt="" />
          <button>DINNER</button>
        </div>
        <div className="third3 ">
          <div className='three three1'>
          <button>DRINK</button>
          <img src="drink.jpg" alt="" />
          </div>
          <div className="three three2">
          <button>STARTERS</button>
            <img src="starters.webp" alt="" /> 
          </div>
          <div className="three three3"> 
          <button>DESSERT</button>
          <img src="dessert.jpg" alt="" />
          </div> 
        </div>
      </div>
    </div>
    </div>
    <div className="happyhour">
      <img src="happy hour.avif" alt="" />
    </div>
     <div className="videocont">
          <VideoSection 
            videoId="WWmu6dndxAM" 
            thumbnail="https://img.youtube.com/vi/WWmu6dndxAM/maxresdefault.jpg" 
          />
          </div>
          <div className="homeblog">
          <h2>Latest News</h2>
          <h1>The Blog</h1>
          <Homecomp/>

          </div>
    

    </>
  )
}
export default Home;
