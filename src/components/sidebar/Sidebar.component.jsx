import React from 'react'
import { WiDayStormShowers } from "react-icons/wi";
import { BsFillGridFill, BsFillBarChartFill, BsGear } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import { FaCalendarAlt } from "react-icons/fa";
import './Sidebar.styles.scss'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <h1><WiDayStormShowers className="header-icon"/> WeatherSpot</h1>
      <ul>
        <li><BsFillGridFill className="side-icon"/>Dashboard</li>
        <li><BsFillBarChartFill className="side-icon"/>Stats</li>
        <li><BiMap className="side-icon"/>Location</li>
        <li><FaCalendarAlt className="side-icon"/>Schedule</li>
        <li><BsGear className="side-icon"/>Preferences</li>
      </ul>
      <div className="sidebar-inner">
        <div className="inner-header">
        <p>Today</p>
        <img src="https://via.placeholder.com/150/0000FF/808080?Text=Weather Icon" alt=""/>

        </div>
        <div className="inner-body">
          <p>28 &deg; C</p>
          <span>clear Skies</span>
        </div>

      </div>

    </div>
  )
}
