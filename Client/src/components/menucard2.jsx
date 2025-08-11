import React from "react";
import Menucomp from "./menucomp";
function Menucrd2(){
    const list=[
        {
          image:"menu4.jpg",
         title:"Sbrisalona",
         submenu:"Proin lacinia nisl ut ultricies posuere nulla",
         content:"$29.79"
        },
        {
          image:"menu5.jpg",
         title: "Cras eget magna",
         submenu:"Sed fermentum eros vitae eros",
         content:"$45.09"
        },
        {
         image: "menu6.jpg",
         title:"Nullam maximus",
         submenu:"Duis massa nibh porttitor nec imperdiet eget",
         content:"$12.75"
        },
    ]
    return( 
        <div className="menucard2list">
        {
      list.map(p=>( 
        <Menucomp {...p}/>
      ))}
        </div>


    
    )
}
export default Menucrd2;