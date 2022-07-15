import React, { Component } from 'react';

import './input.css';

export default class Input extends Component {
    
    state = { TaskArr: this.props.TaskArr }
    
    render() {
        const addTask = () => {
            let newTask = document.getElementById('task');
            this.state.TaskArr.push(newTask.value);
            console.log(this.state.TaskArr);
            newTask.value = '';
        }
        return (
            <div>
                <input type="text" name="task" id="task" className='input-text'/>
                <input onClick={addTask} type="button" value="Сохранить" className='button' />
            </div>
        )
    }
}