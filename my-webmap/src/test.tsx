import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import SaintResume from './assets/components/components-t2/SaintResume'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div style={{ padding: '20px' }}>
      <h1>Test Page</h1>
      <p>This is your blank test page for testing features.</p>
      <SaintResume />
    </div>
  </React.StrictMode>,
)
