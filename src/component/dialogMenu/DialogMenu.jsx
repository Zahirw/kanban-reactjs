import React from 'react'
import { ReactComponent as ArrowRight } from '../../assets/icon/arrowRight.svg'
import { ReactComponent as ArrowLeft } from '../../assets/icon/arrowLeft.svg'
import { ReactComponent as EditIcon } from '../../assets/icon/editIcon.svg'
import { ReactComponent as DeleteIcon } from '../../assets/icon/deleteIcon.svg'

import styles from './dialogMenu.module.scss'

const DialogMenu = (props) => {
  return (
    <div className={styles.dialog_menu}>
      <div className={styles.menu}>
        <ArrowRight /> 
        <p>Move Right</p>
      </div>
      <div className={styles.menu}>
        <ArrowLeft /> 
        <p>Move Left</p>
      </div>
      <div className={styles.menu} onClick={props.onEdit}>
        <EditIcon /> 
        <p>Edit</p>
      </div>
      <div className={styles.menu_delete}>
        <DeleteIcon /> 
        <p>Delete</p>
      </div>
    </div>
  )
}

export default DialogMenu