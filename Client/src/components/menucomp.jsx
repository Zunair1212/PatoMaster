import React from 'react'

function Menucomp(props) {
  return (
    <div className='menuclist'>
        <div className="menucclist">
            <img src={props.image} alt={props.title}  />
            </div>
        <div className="menutitle">
            <h2>{props.title}</h2>
            <h3>{props.submenu}</h3>
            <p>{props.content}</p>
        
      
        </div>

    </div>
  )
}
export default Menucomp;