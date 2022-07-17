import React, { Component } from 'react';

import './input.css';

const Input = ({ onAddTask, onUpdateTask, edit, index, todo }) => {
    if (edit) {
        return (
            <div>
                <input type="text" name="task" id="task" className='input-text' placeholder={todo} />
                <input onClick={() => { onUpdateTask(document.getElementById("task").value, index); document.getElementById("task").value = "" }} type="button" value="Сохранить" className='button' />
            </div>
        )
    }
    else {
        return (
            <div>
                <input type="text" name="task" id="task" className='input-text' />
                <input onClick={() => { onAddTask(document.getElementById("task").value); document.getElementById("task").value = "" }} type="button" value="Сохранить" className='button' />
            </div>
        )
    }
}

export default Input;