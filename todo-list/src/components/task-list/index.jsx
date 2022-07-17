import React, { Component } from 'react';
import Title from '../title';

import './task-list.css';


const TaskList = ({onDelTask, onEdit, TaskArr}) => {
    console.log(TaskArr);
    if (TaskArr.length > 0) {
        return (
            <div>
                <ul className='list'>
                    {TaskArr.map((task, index) => {
                        return (
                            <li className='item' key={index * 5 + 'b'}>{task.task}
                                <div className='icon-edit'><i onClick={() => {onEdit(index) }}className="fas fa-edit"></i></div>
                                <div className='icon-erase' ><i onClick={() => { onDelTask(index) }} className="fas fa-eraser"></i></div>
                                <div className='date'>{task.date}</div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
    else {
        return (
            <div className='error'>
                <Title text={'Задач не найдено!'} />
            </div>
        );
    }
}

export default TaskList;