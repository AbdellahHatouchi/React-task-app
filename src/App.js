
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const data= [{id:1,title:"task one"},{id:2,title:"task two"},{id:3,title:"task three"}]
  const [tasks,setTasks] =useState(data)
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Tasks tasks={tasks} />} />
          <Route path='/addTask' element={<AddTask setTasks={setTasks} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
