import React from 'react'
import { texts } from '../../data/apptexts/texts'
import './Dropdown.css'

function Dropdown(props) {
  return (
    <div className="dropdown-container">
      <span>{texts.fiabilite}</span>
    </div>
  )
}

export default Dropdown
