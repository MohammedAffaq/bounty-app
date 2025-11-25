import React from 'react'
export default function Input({ label, name, value, onChange, type='text', placeholder='', error }){
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input name={name} value={value} onChange={onChange} placeholder={placeholder} type={type}
        className={`w-full border rounded p-2 focus:outline-none focus:ring ${error? 'border-red-500':'border-gray-300'}`}/>
      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
    </div>
  )
}
