import React, { Component } from 'react';
import Title from '../title';
import Input from '../input';
import TaskList from '../task-list';
//css Import
import './main.css'

export default class Main extends Component {
    state = { TaskArr: this.props.TaskArr };
    onAddTask = (newTask) => {
        if (newTask) {
            const date = new Date();
            const newArr = [{ task: newTask, date: date.toDateString() }, ...this.state.TaskArr];
            this.setState({ TaskArr: newArr });
        } else { alert('Пустое значение!')}
    }

    onDelTask = (index) => {
        let removeArr = [...this.state.TaskArr];
        removeArr.splice(index, 1);
        this.setState({ TaskArr: removeArr });
    }

    onUpdateTask = (todo, index) => {
        let newArr = [...this.state.TaskArr];
        newArr[index].task = todo;
        this.setState({ TaskArr: newArr });
        this.setState({ edit: false });
    }

    onEdit = (index) => {
        const todo = [...this.state.TaskArr][index].task;
        this.setState({ edit: true, index: index, todo: todo });
    }

    render() {
        const { TaskArr } = this.state;
        console.log(TaskArr);
        const { edit } = this.state;
        const { index } = this.state;
        const { todo } = this.state;
        let tasks  = '';
        if (this.state.TaskArr.length === 0) { 
            tasks  = '';
        }
        else {
            tasks  = 'Всего заданий: ' + this.state.TaskArr.length;
        }
        
        if (edit) {
            return (
                <div className='main-div'>
                    <Title text={this.props.AppTitle} />
                    <Input onUpdateTask={this.onUpdateTask} edit={edit} index={index} todo={todo} />
                    <TaskList TaskArr={TaskArr} onDelTask={this.onDelTask} onEdit={this.onEdit} />
                    <Title text={tasks}/>
                    <Title text={this.props.BottomText} />
                </div>
            )
        }
        else {
            return (
                <div className='main-div'>
                    <Title text={this.props.AppTitle} />
                    <Input onAddTask={this.onAddTask} onUpdateTask={this.onUpdateTask} edit={edit} />
                    <TaskList TaskArr={TaskArr} onDelTask={this.onDelTask} onEdit={this.onEdit} />
                    <Title text={tasks}/>
                    <Title text={this.props.BottomText} />
                </div>
            )
        }
    }
}
