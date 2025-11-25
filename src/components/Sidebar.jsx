import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Sidebar(){
  const steps = [ {to:'/step/1',label:'Basics'}, {to:'/step/2',label:'Rewards'}, {to:'/step/3',label:'Backer'} ]
  return (
    <aside className="w-56 p-4 border-r">
      <h3 className="font-bold text-lg mb-4">Create Bounty</h3>
      <nav className="flex flex-col gap-2">
        {steps.map((s,i)=> (
          <NavLink key={s.to} to={s.to} className={({isActive})=>`px-3 py-2 rounded ${isActive? 'bg-blue-50 border-l-4 border-blue-600':''}`}>
            <div className="text-sm font-medium">{i+1}. {s.label}</div>
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
