import React from 'react'
import profilepic from '../Assets/profilepic.png'

const Profile = () => {
  return (
    <div>
        <div class="profile-card">
            <img src={profilepic} class="card-img-top" alt="..."/>
            <div className="card-body m-0">
                <div>
                    <p className="card-text name m-0">Bess Willis</p>
                    <p className="card-text details m-1">24 years, California</p>
                </div>
                    <ul class="list-group list-group-flush mt-2">
                        <li className="list-group-item">
                            <p className='head'>Blood</p>
                            <p className='headDetail'>-B</p>
                        </li>
                        <li className="list-group-item">
                            <p className='head'>Height</p>
                            <p className='headDetail'>170cm</p>
                        </li>
                        <li className="list-group-item">
                            <p className='head'>Weight</p>
                            <p className='headDetail'>60kg</p>
                        </li>
                    </ul>
            </div>  
            
        </div>
    </div>
  )
}

export default Profile