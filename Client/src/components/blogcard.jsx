import React from "react";
import Blogcards from "./bcards";


function Blogg(){
    const list=[
        {
         image: "blog1.jpg",
         title:"Cooking recipe Delicious",
         subhead:"by Admin | 28 December, 2018 | Cooking, Food | 8 Comments",
         content:"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius "
        },
        {
         image: "blog2.jpg",
         title:"Pizza is prepared fresh",
         subhead:"by Admin | 20 December, 2018 | Cooking, Food | 8 Comments",
         content:"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius"
        },
        {
         image: "blog3.jpg",
         title:"Style the Wedding Party",
         subhead:"by Admin | 16 December, 2018 | Cooking, Food | 8 Comments",
         content:"Class aptent taciti sociosqu ad litora torquent per conubia nostra,per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius"
        },
        {
         image: "blog4.jpg",
         title:"Best Places for Wine",
         subhead:"by Admin | 15 December, 2018 | Cooking, Food | 8 Comments",
         content:"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius"
        },
        {
         image: "blog5.jpg",
         title:"Best Places for Wine",
         subhead:"by Admin | 12 December, 2018 | Cooking, Food | 8 Comments",
         content:"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius"
        },
    ]
    return( 
        <div className="blogglist">
        {
      list.map(p=>( 
        <Blogcards {...p}/>
      ))}
        </div>


    
    )
}
export default Blogg;