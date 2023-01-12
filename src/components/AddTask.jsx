import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddTask(props) {
  const navigate = useNavigate()
  const [taskData, setTaskData] = useState({ title: '' })
  const handelChange = (event) => {
    const { name, value } = event.target
    setTaskData({ ...taskData, [name]: value })
  }
  const addTask = (e) => {
    e.preventDefault();
    props.setTasks((prevdatatask)=>{return [...prevdatatask,taskData]})
    // props.setTasks((prevdatatask) => prevdatatask.push(taskData))
    navigate('/')
  }
  return (
    <>
      <div>AddTask</div>
      <form onSubmit={addTask} >
        <input type="text" name="title" onChange={handelChange} value={taskData.title} />
        <button>add</button>
      </form>
    </>
  )
}

export default AddTask