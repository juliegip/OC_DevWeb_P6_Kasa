import React, { useState } from 'react'
import styles from './Collapse.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

function Collapse({ title, descr }) {
  let [open, setOpen] = useState(false)
  function toggle() {
    setOpen(!open)
  }

  return (
    <article className={styles.collapseContainer}>
      <div className={styles.collapseTopbar}>
        <div className={styles.collapseTitle}>{title}</div>
        <button onClick={toggle}>
          <FontAwesomeIcon
            icon={faChevronDown}
            size="lg"
            className={open ? '' : styles.hidden}
          />
          <FontAwesomeIcon
            icon={faChevronUp}
            size="lg"
            className={open ? styles.hidden : ''}
          />
        </button>
      </div>

      {open && (
        <div className={`${styles.collapseText} ${open ? styles.opened : ''}`}>
          {descr}
        </div>
      )}
    </article>
  )
}

export default Collapse
