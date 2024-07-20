import React from 'react'
import { Link } from 'react-router-dom'
import { bottom } from '../Style'
import { arrowIcon } from '../Assets'
import SimpleCalendar from './SimpleCalendar'

const Bottom = () => {
  return (
    <div className='bottom d-flex justify-content-between flex-wrap'>
        <div className='left'>
            <h3>Nearest Treatment</h3>
            <p className='m-0'>August 2019 <img src={arrowIcon} alt="" className='m-3'/></p>
            <SimpleCalendar /> 
        </div>
        <div className='right'>
            <h3>Advice</h3>
            <p>The clinical service is consultant-led and available on a 24-hour basis</p>
            <h5>More info via the link</h5>
            <Link className='link'>https://www.heftpathology.com/Haematology-Clinical-Advice</Link>
        </div>
    </div>
  )
}

export default Bottom