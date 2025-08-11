import React from 'react'
import Navbar from '../components/allnavbar';
import VideoSection from '../components/videosection';
import Abbout from '../components/abtcard';
const About = () => {
  return (
    <>
    <Navbar/>
    <div className="about">
      <div className="aboutsec">
        <h1>ABOUT US</h1>
      </div>
      </div>
      <div className="abtsec">
        <h2><em>Italian Restaurant</em></h2>
        <h1>Our Story</h1>
        <p>Fusce at risus eget mi auctor pulvinar. Suspendisse maximus venenatis pretium. Orci varius natoque penatibus et <br /> magnis dis parturient montes, nascetur ridiculus mus. Aliquam purus purus, lacinia a scelerisque in, luctus vel felis. <br />Donec odio diam, dignissim a efficitur at, efficitur et est. Pellentesque semper est ut pulvinar ullamcorper. Class  <br />aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla et leo accumsan, egestas <br /> velit ac, fringilla tortor. Sed varius justo sed luctus mattis.</p>
      </div>
      <div className="videocont">
      <VideoSection 
        videoId="WWmu6dndxAM" 
        thumbnail="https://img.youtube.com/vi/WWmu6dndxAM/maxresdefault.jpg" 
      />
      </div>
      <div className="samecont">
        <div className="smeone">
          <div className="sm1">
            <h2><i>Delicious</i></h2>
            <h1>RECIPES</h1>
            <p>Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed <br /> fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis <br />ligula sem id neque.</p>
          </div>
          <div className="sm2">
            <img src="homesec.jpg" alt="" className='zoomimage' />
          </div>
        </div>
        <div className="smetwo">
          <div className="sm3">
            <img src="absec.jpg" alt="" className='zoomimage' />
          </div>
          <div className="sm4">
            <h2><i>Romantic</i></h2>
            <h1>Restaurant</h1>
            <p>Fusce iaculis, quam quis volutpat cursus, tellus quam varius eros, in <br /> euismod lorem nisl in ante. Maecenas imperdiet vulputate dui sit <br />amet vestibulum. Nulla quis suscipit nisl.</p>
          </div>
        </div>
      </div>
      <div className="abtimg">
        <img src="abtimg.jpg" alt="" />
      </div>
      <div className="abtcard">
        <h2><em>Meet Our</em></h2>
        <h1>Chef</h1>
        <Abbout/>
      </div>
   
    </>
  )
}
export default About;

