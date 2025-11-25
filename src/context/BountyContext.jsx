import React, { createContext, useContext, useState } from 'react'

const initial = {
  title: '',
  description: '',
  projectTitle: '',
  type: 'Development',
  dominant_core: 'Social',
  mode: 'digital',
  location: '',
  reward: { currency: 'USD', amount: 0, winners: 1 },
  timeline: { expiration_date: '', estimated_completion: { days:0,hours:0,minutes:0 } },
  hasImpactCertificate: false,
  impactBriefMessage: '',
  sdgs: [],
  has_backer: false,
  backer: { name:'', logo:'', message:'' },
  terms_accepted: false,
}

const BountyContext = createContext()

export function BountyProvider({ children }){
  const [data, setData] = useState(()=>{
    try{ const saved = localStorage.getItem('bounty_data'); return saved ? JSON.parse(saved) : initial }catch(e){ return initial }
  })

  function update(partial){
    setData(d => { const next = { ...d, ...partial }; localStorage.setItem('bounty_data', JSON.stringify(next)); return next })
  }

  function reset(){ localStorage.removeItem('bounty_data'); setData(initial) }

  return <BountyContext.Provider value={{ data, update, reset }}>{children}</BountyContext.Provider>
}

export function useBounty(){ return useContext(BountyContext) }
