import React from 'react'
import styles from './Host.module.scss'

function Host({ name, profilepic }) {
  return (
    <div className={styles.container}>
      <div className={styles.name}>{name}</div>
      <img
        src={profilepic}
        alt="host_profilpic"
        className={styles.profilepic}
      />
    </div>
  )
}

export default Host
