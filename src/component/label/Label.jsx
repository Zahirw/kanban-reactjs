import React from 'react'

import './label.scss'

const Label = (props) => {
  const numberTask = props.type.charAt(4)
  return (
    <div className={props.type}>
      Group Task {numberTask}
    </div>
  )
}

export default Label