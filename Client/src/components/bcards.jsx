import React from 'react'

function Blogcards(props) {
  return (
    <div className='blglist'>
        <div className="bloglist">
            <img src={props.image} alt={props.title} className='zoomimage' />
            </div>
        <div className="blogtitle">
            <h3>{props.title}</h3>
            <h4>{props.subhead}</h4>
            <p>{props.content}</p>
      
        </div>

    </div>
  )
}
export default Blogcards;