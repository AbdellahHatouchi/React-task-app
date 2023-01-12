import React from 'react'

function Task(props) {
    const {title} = props.dataTask
  return (
    <div>{title}</div>
  )
}

export default Task