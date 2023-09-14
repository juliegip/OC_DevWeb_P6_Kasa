import React from 'react'
import styles from './Collapse.module.scss'

function Collapse({ title }) {
  return (
    <div className={styles.dropdowContainer}>
      <span>{title}</span>
    </div>
  )
}

export default Collapse
