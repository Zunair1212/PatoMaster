import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import {Zoom} from 'react-slideshow-image';

const slideImages=[
    {
        url:'slider1.jpeg',
 
    },
    {
        url:'slider2.jpeg',
      
    },
    {
        url:'slider.jpeg',
       
     }
];
const divStyle = {
    display: 'flex',
    alignItems:'center',
    justifyContent:'center',
    height:'600px',
    backgroundSize:'cover',
   
}


function Slider () {

  return (
    <div>
        <Zoom
        autoplay={true}
        duration={1000}
        transitionDuration={600}
        infinite={true}
        > 
            {slideImages.map((image, index)=> (
                <div key={index}>
                    <div style={{ ...divStyle, backgroundImage:`url(${image.url})`}}>
                     

                    </div>


                </div>

            ))}
            </Zoom>
    </div>
  )
}





export default Slider;