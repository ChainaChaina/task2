import "./App.css";
import TaskCard from "./components/taskCard";
import TaskForm from "./components/taskForm";
import { useEffect, useState } from "react";

function App() {
  // function must me on a arrow function to not be called on render
  const newTask = () => {
    console.log(formOpen);
    setFormOpen((formOpen) => !formOpen);
  };

  const [tasks, setTasks] = useState();
  const [edit, setEdit] = useState();
  const [formOpen, setFormOpen] = useState(false);

  const load = () => {
    // let tasksedit = JSON.stringify([{ title: "Task 1", description: "This is the first task" }]);
    // localStorage.setItem("tasks", tasksedit);
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      console.log("Tasks parsed", JSON.parse(storedTasks));
      setTasks(JSON.parse(storedTasks));
    }else{
      setTasks([]); 
    }
  };

  const handleFormSubmit = (data) => {
    console.log('Data received from child:', data);
    if (data.index === undefined) {
      localStorage.setItem("tasks", JSON.stringify([...tasks, data]));
    } else{
      tasks[data.index] = data;
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    load()
    setFormOpen(false)
  };

  const editTask = (index , data) => {
    setFormOpen(true)
    setEdit({...data,index: index});
    console.log('Data for edit:', data);
    console.log('Data for edit:', edit);
  };

  
  const deleteTask = (index) => {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    load();
  };

  useEffect(() => {
    // Chama a função na inicialização
    load();
  }, []);

  //button on click must be on a arrow function to not be called on render
  return (
    <>
    {formOpen?
    <TaskForm onSubmit={handleFormSubmit} data={edit} />
    :
    tasks?.map((task, index) => (
      <TaskCard key={index} task={task} index={index} edit={editTask} deleteTask={deleteTask} />
    ))
  }
      <button onClick={() => newTask()}> new </button>
    </>
  );
}

export default App;
