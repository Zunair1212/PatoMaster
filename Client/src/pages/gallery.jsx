import React from 'react'
import Navbar from '../components/allnavbar';
import Galleryimg from '../components/galleryimg';

const Gallery = () => {
  return (
    <>
    <Navbar/>
    <div className="gallery">
      <div className="gallerysec">
        <h1>GALLERY</h1>
      </div>
    </div>
    
    <div className="glrymain"> 
      <Galleryimg/>
   </div>
    </>
  )
}
export default Gallery;
