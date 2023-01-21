import React from 'react'

import styles from './label.module.scss'

const Label = (props) => {
  const numberTask = props.type.charAt(4)
  return (
    <div className={styles[props.type]} data-cy='label'>
      Group Task {numberTask}
    </div>
  )
}

export default Label