import React from 'react'

import styles from './textfield.module.scss'

const Textfield = (props) => {
  return (
    <div className={styles.textfield}>
      <label className={styles.label_text} data-cy='label-input'>{props.label}</label>
      <input className={props.type ? styles.progress : ''} type="text" placeholder={props.placeholder} onChange={props.onChange} defaultValue={props.value} data-cy='input'/>
    </div>
  )
}

export default Textfield