import React from "react";
import "./taskCard.css";

function TaskCard(props) {
  return (
    <div className={`card ${props.task.complete ? "complete": ''}`}>
      <h1 className="title">{props.task.title}</h1>
      <p className="description">{props.task.description}</p>
      {/* <p className="complete">{props.task.complete ? "Complete" : "Incomplete"}</p> */}
      <div className="buttons">
        <button onClick={() => props.edit(props.index, props.task)}>
          Edit
        </button>
        <button onClick={() => props.deleteTask(props.index)}>Deletar</button>
      </div>
    </div>
  );
}

export default TaskCard;
