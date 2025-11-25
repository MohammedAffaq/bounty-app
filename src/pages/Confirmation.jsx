import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

export default function Confirmation(){
  const nav = useNavigate()
  return (
    <div className="max-w-2xl">
      <h2 className="text-2xl font-bold mb-4">Bounty Created</h2>
      <p className="mb-4">Your bounty was successfully created. Click below to view the full JSON payload.</p>
      <div className="flex gap-2">
        <Button onClick={()=>nav('/result')}>View Result</Button>
        <Button onClick={()=>nav('/step/1')}>Create Another</Button>
      </div>
    </div>
  )
}
