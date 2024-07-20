import React, { useState } from 'react';
import { leftArrow, rightArrow } from '../Assets';

const SimpleCalendar = () => {
  const [date, setDate] = useState(new Date());

  const getDatesInRange = (startDate, endDate) => {
    const dates = [];
    let currentDate = startDate;
    while (currentDate <= endDate) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  };

  const startDate = new Date(date.getFullYear(), date.getMonth(), 26)
  const endDate = new Date(date.getFullYear(), date.getMonth(), 1)
  endDate.setMonth(date.getMonth() + 1);
  const dates = getDatesInRange(startDate, endDate);

  return (
    <div className="calendar-container">
      <div className="date-row">
        <img src={leftArrow} alt="" />
        {dates.map((dateObj, index) => (
          <div
            key={index}
            className={`date-tile ${dateObj.getDate() === date.getDate() ? 'selected' : ''}`}
            onClick={() => setDate(dateObj)}
          >
            {dateObj.getDate()}
          </div>
        ))}
        <img src={rightArrow} alt="" />
      </div>
    </div>
  );
};

export default SimpleCalendar;
