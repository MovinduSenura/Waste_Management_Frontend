import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Login from './components/Login'
import Dashboard from './components/Dashboard'
import SchedulesCreatePage from './components/SchedulesCreatePage'
import CollectorCreatePage from './components/CollectorCreatePage'
import Collections from './components/Collections'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />

        
        {/* Waste Collection */}
        <Route path="/collectoraddpage" element={<CollectorCreatePage />} />

        
        {/* Schedules */}
        <Route path="/scheduleaddpage" element={<SchedulesCreatePage />} />

        
        <Route path="/collections" element={<Collections />} />
      </Routes>
    </BrowserRouter>
  )
}
