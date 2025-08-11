import React from "react";
import Comphome from './comphome';

function Homecomp(){
    const list=[
        {
         image: "homecomp.jpg",
         title:"Best Places for Wine",
         content:"Phasellus lorem enim,luctus ut velit eget, con-vallis egestas eros. "
        },
        {
         image: "homecomp1.jpg",
         title:"Eggs and Cheese",
         content:"Aliquam eget aliquam magna,quis posuere risus ac justo ipsum nibh."
        },
        {
         image: "homecomp2.jpg",
         title:"Style the Wedding Party",
         content:"Sed ornare ligula eget tortor tempor,quis porta tellus dictum."
        },
    ]
    return( 
        <div className="compmain">
        {
      list.map(p=>( 
        <Comphome {...p}/>
      ))}
        </div>


    
    )
}
export default Homecomp;