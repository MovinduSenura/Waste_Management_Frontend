import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Login from './components/Login'
import SignUp from './components/SignUp'

import CollectorHomePage from './components/collector/CollectorHomePage'
import CollectorMapPage from './components/collector/CollectorMapPage'
import CollectorReportPage from './components/collector/CollectorReportPage'
import CollectorScanPage from './components/collector/CollectorScanPage'
import CollectorSuccessfulPage from './components/collector/CollectorSuccessfulPage'

import UserHomePage from './components/user/UserHomePage'
import UserWasteLevelPage from './components/user/UserWasteLevelPage'
import UserQuickSchedulePage from './components/user/UserQuickSchedulePage'
import UserViewSchedulePage from './components/user/UserViewSchedulePage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/" element={<CollectorHomePage />} />
        <Route path="/collectormappage" element={<CollectorMapPage />} />
        <Route path="/collectorreportpage" element={<CollectorReportPage />} />
        <Route path="/collectorscanpage" element={<CollectorScanPage />} />
        <Route path="/collectorsuccessfulpage" element={<CollectorSuccessfulPage />} />

        <Route path="/userhomepage" element={<UserHomePage />} />
        <Route path="/userwastelevelpage" element={<UserWasteLevelPage />} />
        <Route path="/userquickschedulepage" element={<UserQuickSchedulePage />} />
        <Route path="/userviewschedulepage" element={<UserViewSchedulePage />} />
      </Routes>
    </BrowserRouter>
  )
}
