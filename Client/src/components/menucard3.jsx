import React from "react";
import Menucomp from "./menucomp";
function Menucrd3(){
    const list=[
        {
          image:"menu7.jpg",
         title:"Maecenas tristique",
         submenu:"Maecenas tristique Aenean pharetra tortor dui in pellentesque",
         content:"$29.79"
        },
        {
          image:"menu8.jpg",
         title: "Pine nut sbrisalona",
         submenu:"Aenean condimentum ante erat",
         content:"$45.09"
        },
        {
         image: "menu9.jpg",
         title:"Suspendisse eu",
         submenu:"Proin lacinia nisl ut ultricies posuere nulla",
         content:"$12.75"
        },
    ]
    return( 
        <div className="menucard3list">
        {
      list.map(p=>( 
        <Menucomp {...p}/>
      ))}
        </div>


    
    )
}
export default Menucrd3;