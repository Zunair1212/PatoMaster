import React from 'react'

function Cardblog(props) {
  return (
    <div className='cbcblist'>
        <div className="cbblist">
            <img src={props.image} alt={props.title} />
            </div>
        <div className="cbtitle">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
      
        </div>

    </div>
  )
}
export default Cardblog;