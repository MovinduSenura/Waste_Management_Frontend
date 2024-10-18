import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Login from './components/Login'
import Register from './components/Register'

import CollectorHomePage from './components/collector/CollectorHomePage'
import CollectorMapPage from './components/collector/CollectorMapPage'
import CollectorReportPage from './components/collector/CollectorReportPage'
import CollectorScanPage from './components/collector/CollectorScanPage'
import CollectorSuccessfulPage from './components/collector/CollectorSuccessfulPage'

import UserHomePage from './components/user/UserHomePage'
import UserWasteLevelPage from './components/user/UserWasteLevelPage'
import UserQuickSchedulePage from './components/user/UserQuickSchedulePage'
import UserViewSchedulePage from './components/user/UserViewSchedulePage'
import CollectorCreatePage from './components/collector/CollectorCreatePage'
import FeedbackCreatePage from './components/feedback/FeedbackCreatePage'
import PaymentsCreatePage from './components/payments/PaymentsCreatePage'
import SchedulesCreatePage from './components/schedules/SchedulesCreatePage'
import SpecialReqCreatePage from './components/requests/SpecialReqCreatePage'
import UserCreatePage from './components/user/UserCreatePage'
import WasteCollectionCreatePage from './components/collections/WasteCollectionCreatePage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<CollectorHomePage />} />
        <Route path="/collectoraddpage" element={<CollectorCreatePage />} />
        <Route path="/collectormappage" element={<CollectorMapPage />} />
        <Route path="/collectorreportpage" element={<CollectorReportPage />} />
        <Route path="/collectorscanpage" element={<CollectorScanPage />} />
        <Route path="/collectorsuccessfulpage" element={<CollectorSuccessfulPage />} />

        {/* Users */}
        <Route path="/useraddpage" element={<UserCreatePage />} />
        <Route path="/userhomepage" element={<UserHomePage />} />
        <Route path="/userwastelevelpage" element={<UserWasteLevelPage />} />
        <Route path="/userquickschedulepage" element={<UserQuickSchedulePage />} />
        <Route path="/userviewschedulepage" element={<UserViewSchedulePage />} />

        {/* Feedbacks */}
        <Route path="/feedbackaddpage" element={<FeedbackCreatePage />} />
        
        {/* Payments */}
        <Route path="/paymentaddpage" element={<PaymentsCreatePage />} />
        
        {/* Schedules */}
        <Route path="/scheduleaddpage" element={<SchedulesCreatePage />} />
        
        {/* Special Requests */}
        <Route path="/specialrequestaddpage" element={<SpecialReqCreatePage />} />
        
        {/* Waste Collection */}
        <Route path="/wastecolladdpage" element={<WasteCollectionCreatePage />} />
      </Routes>
    </BrowserRouter>
  )
}
