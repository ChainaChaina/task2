import React, { useEffect } from "react";
import { useState } from "react";

function TaskForm(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [complete, setComplete] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { title, description, complete, index: props.data?.index };
    props.onSubmit(formData);
  };

  useEffect(() => {
      if (props.data) {
        console.log('data no form', props.data )
      setTitle(props.data.title);
      setDescription(props.data.description);
      setComplete(props.data.complete);
    }
  }, []);

  //forms on submit will refresh the page and change the state to avoid this use e.preventDefault()
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input onChange={(e) => setTitle(e.target.value)}  value={title} type="text" id="title" name="title" />
        <label htmlFor="description">Description</label>
        <input onChange={(e) => setDescription(e.target.value)} value={description} type="text" id="description" name="description" />
        <label htmlFor="complete">Complete</label>
    
        <input onChange={(e) => setComplete(e.target.value)} value={complete} type="checkbox" id="complete" name="complete" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TaskForm;
