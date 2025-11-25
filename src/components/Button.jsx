import React from 'react'
export default function Button({ children, onClick, type='button', disabled }){
  return (
    <button type={type} onClick={onClick} disabled={disabled}
      className={`px-4 py-2 rounded-md ${disabled ? 'bg-gray-300 text-gray-600' : 'bg-blue-600 text-white'}`}>
      {children}
    </button>
  )
}
