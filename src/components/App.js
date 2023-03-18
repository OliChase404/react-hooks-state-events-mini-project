import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [currentTasks, setCurrentTasks] = useState(TASKS)
  const [selected, setSelected] = useState(0)
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selected={selected} setSelected={setSelected} />
      <NewTaskForm categories={CATEGORIES} setCurrentTasks={setCurrentTasks} currentTasks={currentTasks} />
      <TaskList categories={CATEGORIES} selected={selected} currentTasks={currentTasks} setCurrentTasks={setCurrentTasks}  />
    </div>
  );
}

export default App;
