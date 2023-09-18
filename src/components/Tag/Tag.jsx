import React from 'react'
import styles from './Tag.module.scss'

function Tag({ tags }) {
  return (
    <div className={styles.container}>
      {tags &&
        tags.map((tag, index) => {
          return (
            <span className={styles.text} key={tag + index}>
              {tag}
            </span>
          )
        })}
    </div>
  )
}

export default Tag
