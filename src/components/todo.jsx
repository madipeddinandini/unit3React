import React, { useState } from 'react';

const Todo = () => {

  const [tasks, settasks] = useState([
    { id: 1, text: "complete assignment5", completed: false } 
  ]);

  
  const [newTask, setnewTask] = useState("");

  const handleChange = (event) => {
    setnewTask(event.target.value);
    console.log(newTask); 
  };

  const handleAdd = () => {
    if (newTask.trim() !== "") { 
      const task = {
        id: Date.now(), 
        text: newTask,
        completed: false
      };
      settasks([...tasks, task]); 
      setnewTask(""); 
    }
  };

 
  const handleCheck = (id) => {
    settasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };


  const handleDelete = (id) => {
    settasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="todo-container">
      <h1>To do list</h1>

    
      <div className="input-section">
        <input
          type="text"
          value={newTask}
          onChange={handleChange}
          placeholder="Enter new task"
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      
      <ul>
        {tasks.map(task => (
          <li key={task.id} className="task-item">
       
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleCheck(task.id)}
            />

           
            <span className={task.completed ? "check" : ""}>
              {task.text}
            </span>

            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;