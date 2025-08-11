import React from 'react'

function Abtcards(props) {
  return (
    <div className='abtlist'>
        <div className="aboutlist">
            <img src={props.image} alt={props.title}  />
            </div>
        <div className="abttitle">
            <h3>{props.title}</h3>
            <h4>{props.subhead}</h4>
            <p>{props.content}</p>
      
        </div>

    </div>
  )
}
export default Abtcards;