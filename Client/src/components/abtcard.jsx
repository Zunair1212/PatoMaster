import React from "react";
import Abtcards from "./aboutcard";


function Abbout(){
    const list=[
        {
         image: "chef.jpg",
         title:"Peter Hart",
         subhead:"Chef",
         content:"Donec porta eleifend mauris ut effici-tur. Quisque non velit vestibulum, lob-ortis mi eget, rhoncus nunc "
        },
        {
         image: "chef1.jpg",
         title:"Joyce Bowman",
         subhead:"Chef",
         content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies felis a sem tempus tempus."
        },
        {
         image: "chef2.jpg",
         title:"Peter Hart",
         subhead:"Chef",
         content:"Phasellus aliquam libero a nisi varius, vitae placerat sem aliquet. Ut at velit nec ipsum iaculis posuere quis in sapien"
        },
    ]
    return( 
        <div className="abboutlist">
        {
      list.map(p=>( 
        <Abtcards {...p}/>
      ))}
        </div>


    
    )
}
export default Abbout;