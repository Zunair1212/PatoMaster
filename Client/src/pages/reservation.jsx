import React from 'react'
import Navbar from '../components/allnavbar';
import Reserform from './reserform';
const Reservation = () => {
  return (
    <>
    <Navbar/>
    <div className='resersec'>
      <div className="resser">
        <h1>RESERVATION</h1>
      </div>
    </div>
    <div className="bookreser">
      <h3><i>Reservation</i></h3>
      <h1>Book table</h1>
      <Reserform/>
      <div className="brsec">
        <div className="brsecone">
          <h1>Reserve by Phone</h1>
          <p>Donec quis euismod purus. Donec feugiat ligula rhoncus,varius nisl <br /> sed, tincidunt  lectus. Nulla vulputate ,lectus vel volutpat efficitur, orci <br /> lacus sodales sem, sit amet quam:<h6>(001) 345 6889</h6> </p>
        </div>
        <div className="brsectwo">
          <h1>For Event Booking</h1>
          <p>Donec feugiat ligula rhoncus: <h6>(001) 345 6889 </h6> , varius nisl sed, tinci- <br /> dunt lectus sodales sem.</p>
        </div>
      </div>
    </div>

    </>
  )
}
export default Reservation;
