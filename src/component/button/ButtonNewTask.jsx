import React from 'react'
import { ReactComponent as PlusIcon } from '../../assets/icon/plusIcon.svg'

import styles from './buttonNewTask.module.scss'

const ButtonNewTask = () => {
  return (
    <button className={styles.btn_newtask}>
      <PlusIcon />
      <p className={styles.caption}>New Task</p>
    </button>
  )
}

export default ButtonNewTask