import React from 'react'
import { global } from './Style';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Dashboard from './Pages/Dashboard';
import app from './App.css'


const App = () => {
  return (
    <Router>
      <div className='content'>
        <Navbar />
        <div className='main-content'>
          <Routes>
            <Route path='/' element={<Dashboard />} />
          </Routes>                     
        </div>
      </div>
    </Router>
  )
}

export default App