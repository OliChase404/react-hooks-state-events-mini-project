import React, {useState} from "react";

function NewTaskForm({categories, currentTasks, setCurrentTasks}) {
  const catBtns = categories.map((cat) => <option key={cat}>{cat}</option>)
  catBtns.splice(0,1)
  
  const [newTask, setNewTask] = useState(  {
    text: "",
    category: "",
  })

  function handleSubmit(event){
    event.preventDefault()
    setCurrentTasks((prevTasks) => {
      return [...prevTasks, newTask]
    })
  }

  function handleChange(event){
    setNewTask({ ...newTask, [event.target.name]: event.target.value })
  }
  console.log(newTask)

  return (
    <form onSubmit={(event) => handleSubmit(event)} className="new-task-form">
      <label>
        Details
        <input type="text" name="text" onChange={handleChange} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleChange}>
          {catBtns}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
