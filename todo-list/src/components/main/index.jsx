import React, { Component } from 'react';
import Title from '../title';
import Input from '../input';
import TaskList from '../task-list';
//css Import
import './main.css'



const Main = (props) => {
  
    return (
        <div className='main-div'>
            <Title text={props.AppTitle} />
            <Input />
            <TaskList TaskArr={props.TaskArr} />
            <Title text={props.BottomText} />
        </div>
    )
}

export default Main;