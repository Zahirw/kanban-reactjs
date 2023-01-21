import React from 'react'

import styles from './description.module.scss'

const Description = (props) => {
  return (
    <div className={styles.description}>
      <label className={styles.label_text}>{props.label}</label>
      <textarea placeholder={props.placeholder}/>
    </div>
  )
}

export default Description