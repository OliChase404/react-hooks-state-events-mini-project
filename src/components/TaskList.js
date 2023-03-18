import React, { useState } from "react";
import {v4 as uuid} from 'uuid'
import Task from "./Task";

function TaskList({selected, categories, currentTasks, setCurrentTasks}) {


console.log(selected)
console.log(categories)

function removeTask(taskToRemove){
  const updatedTasks = currentTasks.filter((t) => t.text !== taskToRemove.text)
  setCurrentTasks(updatedTasks)
}

let filteredTasks = []

if(selected === 0){
  filteredTasks = currentTasks
} else {
    filteredTasks = currentTasks.filter((t) =>{ 
    return t.category === categories[selected]})
}



let tasksToDisplay = filteredTasks.map((task) => {
  return <Task removeTask={removeTask} key={uuid()} task={task} />
})


  return (
    <div className="tasks">
      {tasksToDisplay}
    </div>
  );
}

export default TaskList;
