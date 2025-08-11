import React from "react";
import Menucomp from "./menucomp";
function Menucrd1(){
    const list=[
        {
          image:"menu1.jpg",
         title:"Sed varius",
         submenu:"Aenean pharetra tortor dui in pellentesque",
         content:"$29.79"
        },
        {
          image:"menu2.jpg",
         title: "Tempus aliquet",
         submenu:"Aenean condimentum ante erat",
         content:"$45.09"
        },
        {
         image: "menu3.jpg",
         title:"Duis massa",
         submenu:"Proin lacinia nisl ut ultricies posuere nulla",
         content:"$12.75"
        },
    ]
    return( 
        <div className="menucard1list">
        {
      list.map(p=>( 
        <Menucomp {...p}/>
      ))}
        </div>


    
    )
}
export default Menucrd1;