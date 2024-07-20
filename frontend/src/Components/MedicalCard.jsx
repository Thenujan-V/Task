import React from 'react';
import { medicalCard } from '../Style';

const MedicalCard = ({ date, title, description, status, requireOpt }) => {
  return (
    <div className={`medicalCard ${status}`}>
      <div className='d-flex justify-content-between'>
        <div className="date">{date}</div>
        <div className="requireOpt">{requireOpt}</div>
      </div>
      <div className="title">{title}</div>
      <div className="description">{description}</div>
    </div>
  );
};

export default MedicalCard;