import React from 'react'

import styles from "./Popover.module.css"

const Popover = ({title, nickname}) => {
  return (
    <article className={styles.popover}>
        <span className={styles.title}> {title}:</span>
        <span className={styles.nickname}> {nickname} </span>
    </article>
  )
}

export default Popover;

