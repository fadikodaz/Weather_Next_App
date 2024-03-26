import React from 'react'
import './ToggleBtn.css'

const ToggleBtn = () => {
  return (
    <div className="toggle-switch">
        <label className="switch-label">
            <input type="checkbox" className="checkbox" />
            <span className="slider"></span>
        </label>
    </div>  
  )
}

export default ToggleBtn