import React from 'react';

function TaskCard(props) {
    return (
        <div className='container'>
            <h1>{props.task.title}</h1>
            <p>{props.task.description}</p>
            <button onClick={() => props.edit(props.index ,props.task)}>Edit</button>
            <button onClick={() => props.deleteTask(props.index)}>Deletar</button>
        </div>
    );
}

export default TaskCard;