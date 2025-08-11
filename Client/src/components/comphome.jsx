import React from 'react'

function Comphome(props) {
  return (
    <div className='hcmain'>
        <div className="hclist">
            <img src={props.image} alt={props.title} />
            </div>
        <div className="hctitle">
            <h2>{props.title}</h2>
            <p>{props.content}</p>

      
        </div>

    </div>
  )
}
export default Comphome;