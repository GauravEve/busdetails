import React from 'react'
//react icons
import {MdOutlineAirlineSeatReclineExtra} from "react-icons/md";
import {RxDotFilled} from "react-icons/rx";
import {MdOutlineHealthAndSafety} from "react-icons/md";
import {RiShieldStarLine} from "react-icons/ri";
import {MdGroups2} from "react-icons/md";

function busInfo() {
  return (
    /
    <div className='grid-container'>

      <div className='item1'><span className="restStop">1 REST STOP</span><br/><span className='time'>21:55</span>-05:00</div>
      <div className='item2'><span className="from">From</span><br/><span className="price">₹ 600</span></div>
      <div className='item3' ><span className='duration'>7h 05m <RxDotFilled/>22 Seats</span><br/><span className='busName'>Sri Durga Tourist</span><br/><span className='AC'>NON A/C Sleeper (2+1)</span></div>
      <div className='item4'><button className='rating'><RiShieldStarLine/>4.2<br/><MdGroups2/>  84</button></div>
      <div className='item5'><span className="services"><span className='legroom'><MdOutlineAirlineSeatReclineExtra className="seat"/>Extra Legroom</span><span className='safety'><MdOutlineHealthAndSafety className="safetyIcon"/> Safety+</span></span><button className='busTracking'>BUS TRACKING</button>   <button className='reschedule'>RESCHEDULABLE</button></div>

    </div>
  )
}

export default busInfo
