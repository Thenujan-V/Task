import React from 'react'
import doctorPic from '../Assets/doctorPic.png'


const ProfileDetail = () => {
  return (
    <div className='profile-details'>
        <div className='first'>
            <p className='notify'>Notifications</p>
            <p className='date'>26 Aug 2019</p>
        </div>
        <div class="card">
            <div className="card-body m-0">
                <div>
                    <div className='first-body'>
                        <p className="card-text name m-1">Kognum</p>
                        <p className="card-text details m-1">10mg</p>
                    </div>
                    <div className='days mt-2'>
                        <p className="card-text name">MON</p>
                        <p className="card-text name">WED</p>
                        <p className="card-text name">FRI</p>
                        <p className="card-text name">SUN</p>
                    </div>
                    <div className='times  mt-0'>
                        <p>2 times in a day before food</p>
                    </div>
                </div>
                <ul class="list-group list-group-flush mt-3">
                    <li className="list-group-item doctor p-0">
                        <img src={doctorPic} class="card-img-top" alt="..."/>
                        <div className='doc-details '>
                            <p className='name p-0 m-0'>Dr. Isabella Bowers</p>
                            <p className='place m-0 p-0'>California Hospital Medical Center</p>
                        </div>
                    </li>
                    <li className="list-group-item work p-0  mt-3">
                        <p className='head p-0 m-0'>Surgeon</p>
                        <p className='headDetail p-0 m-0'>Spinal pain</p>
                    </li>
                    <li className="list-group-item dates p-0  mt-2">
                        <div>
                            <p className='head p-0 m-0'>Date</p>
                            <p className='headDetail p-0 m-0'>26 Aug 2019</p>
                        </div>
                        <div>
                            <p className='head p-0 m-0'>Time</p>
                            <p className='headDetail p-0 m-0'>12:45 AM</p>
                        </div>
                    </li>
                </ul>
            </div>  
            
        </div>
    </div>
  )
}

export default ProfileDetail