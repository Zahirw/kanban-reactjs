import React from 'react'

import styles from './button.module.scss'
const Button = (props) => {
  return (
    <button data-cy='btn' className={styles[`btn_${props.type}`]} onClick={props.onClick}>{props.name}</button>
  )
}

export default Button