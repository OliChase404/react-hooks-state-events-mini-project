import React from "react";

function Task({task, removeTask}) {
  // console.log(task)
  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button onClick={() => removeTask(task)} className="delete">X</button>
    </div>
  );
}

export default Task;
