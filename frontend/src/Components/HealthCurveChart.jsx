import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const HealthCurveChart = () => {
  const [xAxisMode, setXAxisMode] = useState('day'); 

  const data = {
    day: {
      labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
      values: Array.from({ length: 30 }, () => Math.floor(Math.random() * 100))
    },
    week: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      values: Array.from({ length: 4 }, () => Math.floor(Math.random() * 100))
    },
    month: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      values: Array.from({ length: 12 }, () => Math.floor(Math.random() * 100))
    },
    year: {
      labels: ['2016', '2017', '2018', '2019'],
      values: Array.from({ length: 4 }, () => Math.floor(Math.random() * 100))
    }
  };

  const chartData = {
    labels: data[xAxisMode].labels,
    datasets: [
      {
        label: 'My Data',
        data: data[xAxisMode].values,
        fill: 'start',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        align: 'start',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
      
    }
  };

  return (
    <div className='container graph'>
      <div className='d-flex justify-content-between'>
        <h3>Health Curve</h3>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', gap: '10px', padding:'10px' }}>
            <button onClick={() => setXAxisMode('day')}>D</button>
            <button onClick={() => setXAxisMode('week')}>W</button>
            <button onClick={() => setXAxisMode('month')}>M</button>
            <button onClick={() => setXAxisMode('year')}>Y</button>
        </div>
      </div>
      <Line data={chartData} options={options} style={{maxHeight:'30vh'}}/>
    </div>
  );
};

export default HealthCurveChart;
