import React from 'react'
export default function Toggle({ label, checked, onChange }){
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="text-sm font-medium">{label}</div>
      <label className="inline-flex relative items-center cursor-pointer">
        <input type="checkbox" checked={checked} onChange={e=>onChange(e.target.checked)} className="sr-only" />
        <div className={`w-10 h-6 rounded-full ${checked? 'bg-blue-600':'bg-gray-300'}`}></div>
      </label>
    </div>
  )
}
