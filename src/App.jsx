import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Step1 from './pages/Step1'
import Step2 from './pages/Step2'
import Step3 from './pages/Step3'
import Confirmation from './pages/Confirmation'
import Result from './pages/Result'

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/step/1" replace />} />
        <Route path="step/1" element={<Step1 />} />
        <Route path="step/2" element={<Step2 />} />
        <Route path="step/3" element={<Step3 />} />
        <Route path="confirmation" element={<Confirmation />} />
        <Route path="result" element={<Result />} />
      </Route>
      <Route path="*" element={<div className="p-8">Not Found</div>} />
    </Routes>
  )
}
