import React from 'react'
import texts from '../../data/app_texts'
import styles from './Dropdown.module.scss'

function Dropdown(title) {
  return (
    <div className={styles.dropdowContainer}>
      <span>{title}</span>
    </div>
  )
}

export default Dropdown
