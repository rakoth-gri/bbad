import React from 'react'

import styles from "./Popover.module.css"

const Popover = ({title, nickname}) => {
  return (
    <article className={styles.popover}>
        <h5 className={styles.title}> {title}</h5>
        <p className={styles.nickname}> {nickname} </p>
    </article>
  )
}

export default Popover;

