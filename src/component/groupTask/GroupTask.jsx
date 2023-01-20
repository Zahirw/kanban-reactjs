import React from 'react'
import Label from '../label/Label'

import styles from './groupTask.module.scss'

const GroupTask = (props) => {
  return (
    <div className={styles[props.type]}>
      <Label 
        type={props.type}
      />
    </div>
  )
}

export default GroupTask