import React, { Component } from 'react';

import './input.css';

export default class Input extends Component {
    state = { TaskList: [] }
    render() {
    const addTask = () => {
        let newTask = document.getElementById('task').value;
        this.state.TaskList.push(newTask);
    }
        return (
            <div>
                <input type="text" name="task" id="task" className='input-text'/>
                <input onClock={addTask} type="button" value="Сохранить" className='button' />
            </div>
        )
    }
}