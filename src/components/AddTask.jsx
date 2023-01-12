import React, { useState } from 'react'

function AddTask(props) {
    const [taskData,setTaskData] = useState({title:''})
    const handelChange= (event)=>{
        const {name,value}=event.target
        setTaskData({...taskData,[name]:value})
    }
    const addTask = ()=>{
        // props.setTasks((prevdatatask)=>{return [...prevdatatask,taskData]})
        props.setTasks((prevdatatask)=>prevdatatask.push(taskData))
    }
  return (
    <div>AddTask</div>
  )
}

export default AddTask