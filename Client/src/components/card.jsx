import React from "react";
import Cards from "./cards";

function List(){
    const list=[
        {
         image: "romantic.jpg",
         title:"ROMANTIC RESTAURANT",
         content:"Phasellus lorem enim,luctus ut velit eget, con-vallis egestas eros. "
        },
        {
         image: "deliciousfood.jpg",
         title:"DELICIOUS FOOD",
         content:"Aliquam eget aliquam magna,quis posuere risus ac justo ipsum nibh."
        },
        {
         image: "wine.webp",
         title:"RED WINES YOU LOVE",
         content:"Sed ornare ligula eget tortor tempor,quis porta tellus dictum."
        },
    ]
    return( 
        <div className="maiinlist">
        {
      list.map(p=>( 
        <Cards {...p}/>
      ))}
        </div>


    
    )
}
export default List;