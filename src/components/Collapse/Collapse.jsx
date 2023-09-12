import React from 'react'
import texts from '../../data/app_texts'
import styles from './Dropdown.module.scss'

function Dropdown(props) {
  return (
    <div className={styles.dropdowContainer}>
      <span>{texts.fiabilite}</span>
    </div>
  )
}

export default Dropdown
