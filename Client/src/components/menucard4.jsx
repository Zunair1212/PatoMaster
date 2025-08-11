import React from "react";
import Menucomp from "./menucomp";
function Menucrd4(){
    const list=[
        {
          image:"menu10.jpg",
         title:"Cras maximus",
         submenu:"Proin lacinia nisl ut ultricies posuere nulla",
         content:"$29.79"
        },
        {
          image:"menu11.jpg",
         title: "Pine nut sbrisalona",
         submenu:"Sed fermentum eros vitae eros",
         content:"$45.09"
        },
        {
         image: "menu12.jpg",
         title:"Tempor malesuada",
         submenu:"Duis massa nibh porttitor nec imperdiet eget",
         content:"$12.75"
        },
    ]
    return( 
        <div className="menucard4list">
        {
      list.map(p=>( 
        <Menucomp {...p}/>
      ))}
        </div>


    
    )
}
export default Menucrd4;