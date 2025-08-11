import React from "react";
import Cardblog from "./cardblg";

function Crdblog(){
    const list=[
        {
         image: "cardb.jpg",
         title:"Best Places for Wine",
         content:"3 days ago "
        },
        {
         image: "cardbb.jpg",
         title:"Eggs and Cheese",
         content:"July 2, 2017"
        },
        {
         image: "cardbbb.jpg",
         title:"Style the Wedding Party",
         content:"May 28, 2017"
        },
        {
         image: "cardbbbb.jpg",
         title:"Cooking recipe Delicious",
         content:"May 25, 2017 "
        },
        {
         image: "cardbbbbb.jpg",
         title:"Pizza is prepared fresh",
         content:"May 2, 2017 "
        },
    ]
    return( 
        <div className="cardblist">
        {
      list.map(p=>( 
        <Cardblog {...p}/>
      ))}
        </div>


    
    )
}
export default Crdblog;