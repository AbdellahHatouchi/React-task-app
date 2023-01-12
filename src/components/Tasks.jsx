import React from 'react'
import Task from './Task'

const Tasks = (props) => {
    const {tasks} = props.tasks
  return (
    <div>
        {tasks.map((task)=>
            <Task dataTask={task} />
        )}
    </div>
  )
}

export default Tasks