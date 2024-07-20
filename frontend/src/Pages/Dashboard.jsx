import React from 'react'
import Profile from '../Components/Profile'
import ProfileDetail from '../Components/ProfileDetail'
import ProfileEnd from '../Components/ProfileEnd'
import MedicalCard from '../Components/MedicalCard'
import { Link } from 'react-router-dom'
import { seeallIcon } from '../Assets'
import Bottom from '../Components/Bottom'
import HealthCurveChart from '../Components/HealthCurveChart'


const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div>
        <Profile />
        <ProfileDetail /> 
        <ProfileEnd />
      </div>
      <div className='rightSide m-0'>
        <div className='top'>
          <p>Examinations</p>
          <div>
            <div>
             <img src={seeallIcon} alt="" />
            </div>
              <Link className='link'>See All</Link>
          </div>
        </div>
        <div className='MedicalCard'>
          <MedicalCard
            className="details"
            date="21 Jul, 2019"
            title="Hypertensive crisis"
            description="Ongoing treatment"
            status="ongoing"
          />
          <MedicalCard
            className="details"
            date="18 Jul, 2019"
            title="Osteoporosis"
            description="Incurable"
            requireOpt="Need analyzes"
            status="need-analysis"
          />
          <MedicalCard
            className="details"
            date="21 Jul, 2019"
            title="Hypertensive crisis"
            description="Examination"
            status="examination"
          />
        </div>
        <HealthCurveChart />
        <Bottom />
      </div>
    </div>
  )
}

export default Dashboard