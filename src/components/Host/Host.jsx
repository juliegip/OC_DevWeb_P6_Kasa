import React from 'react'
import styles from './Host.module.scss'

function Host({ name, profilepic }) {
  return (
    <div className={styles.container}>
      <p className={styles.name}>{name}</p>
      <img
        src={profilepic}
        alt="host_profilpic"
        className={styles.profilepic}
      />
    </div>
  )
}

export default Host
