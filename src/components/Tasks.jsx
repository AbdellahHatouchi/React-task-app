import React from 'react'
import { Link } from 'react-router-dom'
import Task from './Task'

const Tasks = (props) => {
    const tasks = props.tasks
  return (
    <div>
        {tasks.map((task)=>
            <Task dataTask={task} key={task.id}/>
        )}
        <Link to={"addTask"}>ADD TASK</Link>
    </div>
  )
}

export default Tasks