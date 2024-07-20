import React, { useState } from 'react'
import { navbar } from '../Style'
import { Link } from 'react-router-dom'
import {dashboardIcon, contactIcon, doctorIcon, trackerIcon, dashboardIconActive, doctorIconActive, trackerIconActive, contactIconActive} from '../Assets'

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Dashboard');

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  const getLinkClassName = (linkName) => {
    return linkName === activeLink ? 'link-active' : 'link';
  };

  const getIcon = (linkName) => {
    switch (linkName) {
      case 'Dashboard':
        return activeLink === 'Dashboard' ? dashboardIconActive : dashboardIcon;
      case 'Doctor':
        return activeLink === 'Doctor' ? doctorIconActive : doctorIcon;
      case 'Contact':
        return activeLink === 'Contact' ? contactIconActive : contactIcon;
      case 'Tracker':
        return activeLink === 'Tracker' ? trackerIconActive : trackerIcon;
      default:
        return dashboardIcon;
    }
  };


  return (
    <div className='nav flex-column'>
        <Link to='/' className={getLinkClassName('Dashboard')} 
              onClick={() => handleLinkClick('Dashboard')}>
                  <img src={getIcon('Dashboard')} alt="" />
                  <div>Dashboard</div>
        </Link>
        <Link className={getLinkClassName('Doctor')} 
              onClick={() => handleLinkClick('Doctor')}>
                  <img src={getIcon('Doctor')} alt="" />
                  <div>Doctor</div>
        </Link>
        <Link className={getLinkClassName('Contact')} 
              onClick={() => handleLinkClick('Contact')}>
                  <img src={getIcon('Contact')} alt="" />
                  <div>Contact</div>
        </Link>
        <Link className={getLinkClassName('Tracker')} 
              onClick={() => handleLinkClick('Tracker')}>
                  <img src={getIcon('Tracker')} alt="" />
                  <div>Tracker</div>
        </Link>
        
    </div>
  )
}

export default Navbar