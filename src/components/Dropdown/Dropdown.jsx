import React, { useRef, useState } from 'react'
import styles from './Dropdown.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

function Dropdown({ title, descr, style }) {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef()

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const contentHeight = isOpen ? `${contentRef.current.scrollHeight}px` : '0px'

  return (
    <article className={`${styles.container} ${style}`}>
      <div className={styles.topbar}>
        <div className={styles.title}>{title}</div>
        <button className={styles.btn} onClick={toggle}>
          <FontAwesomeIcon
            icon={faChevronDown}
            size="lg"
            className={isOpen ? '' : styles.hidden}
          />
          <FontAwesomeIcon
            icon={faChevronUp}
            size="lg"
            className={isOpen ? styles.hidden : ''}
          />
        </button>
      </div>

      <div
        className={styles.parent}
        ref={contentRef}
        style={{ height: contentHeight }}
      >
        {Array.isArray(descr) ? (
          <ul className={styles.list}>
            {descr.map((item, index) => (
              <li key={index} className={styles.listitem}>
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <div className={styles.contenttext}> {descr} </div>
        )}
      </div>
    </article>
  )
}
export default Dropdown
