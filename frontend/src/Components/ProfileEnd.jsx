import React from 'react'
import settingsIcon from '../Assets/settingsIcon.png'

const ProfileEnd = () => {
  return (
    <div className='profile-end'>
        <div className='first-end'>
            <p>5432</p>
            <div>
                <p>Bess Willis</p>
                <p className='visa'>VISA</p>
            </div>
        </div>
        <div className='last-end'>
            <div className='mt-1'>
                <img src={settingsIcon} alt="" />
            </div>
            <p>settings</p>
        </div>
    </div>
  )
}

export default ProfileEnd