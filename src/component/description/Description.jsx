import React from 'react'

import styles from './description.module.scss'

const Description = (props) => {
  return (
    <div className={styles.description}>
      <label className={styles.label_text} data-cy='label-textarea'>{props.label}</label>
      <textarea placeholder={props.placeholder} data-cy='textarea'/>
    </div>
  )
}

export default Description