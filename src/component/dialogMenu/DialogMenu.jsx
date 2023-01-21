import React from 'react'
import { useSelector } from 'react-redux';
import { ReactComponent as ArrowRight } from '../../assets/icon/arrowRight.svg'
import { ReactComponent as ArrowLeft } from '../../assets/icon/arrowLeft.svg'
import { ReactComponent as EditIcon } from '../../assets/icon/editIcon.svg'
import { ReactComponent as DeleteIcon } from '../../assets/icon/deleteIcon.svg'

import styles from './dialogMenu.module.scss'

const DialogMenu = (props) => {
  const itemsEdit = useSelector((state) => state.todos.itemsEdit)
  return (
    <div className={styles.dialog_menu}>
      {
        itemsEdit.todo_id !== 4 &&
        <div className={styles.menu} onClick={props.onRight}>
          <ArrowRight /> 
          <p>Move Right</p>
        </div> 
      }
      {
        itemsEdit.todo_id !== 1 &&
        <div className={styles.menu} onClick={props.onLeft}>
          <ArrowLeft /> 
          <p>Move Left</p>
        </div>
      }
      <div className={styles.menu} onClick={props.onEdit}>
        <EditIcon /> 
        <p>Edit</p>
      </div>
      <div className={styles.menu_delete} onClick={props.onDelete}>
        <DeleteIcon /> 
        <p>Delete</p>
      </div>
    </div>
  )
}

export default DialogMenu