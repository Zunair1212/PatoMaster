import React from 'react'

function Cards(props) {
  return (
    <div className='mainlist'>
        <div className="list">
            <img src={props.image} alt={props.title} className='zoomimage'/>
            </div>
        <div className="title">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <button >LEARN MORE</button>
      
        </div>

    </div>
  )
}
export default Cards;