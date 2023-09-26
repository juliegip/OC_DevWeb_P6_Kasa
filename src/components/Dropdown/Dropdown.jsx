import React from 'react'
import { useRef, useState } from 'react'
import styles from './Dropdown.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

function Dropdown({ title, descr }) {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef()
  if (contentRef.current) console.log(contentRef.current.scrollHeight)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <article className={styles.container}>
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
        style={
          isOpen
            ? { height: contentRef.current.scrollHeight + 'px' }
            : { height: '0px' }
        }
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
