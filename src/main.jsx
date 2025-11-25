import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { BountyProvider } from './context/BountyContext'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <BountyProvider>
        <App />
      </BountyProvider>
    </BrowserRouter>
  </React.StrictMode>
)
