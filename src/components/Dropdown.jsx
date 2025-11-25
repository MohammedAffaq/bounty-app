import React from 'react'
export default function Dropdown({ label, value, onChange, options = [], name, error }){
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">{label}</label>
      <select name={name} value={value} onChange={onChange}
        className={`w-full border rounded p-2 focus:outline-none ${error? 'border-red-500':'border-gray-300'}`}>
        {options.map(opt=> <option key={opt} value={opt}>{opt}</option>)}
      </select>
      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
    </div>
  )
}
