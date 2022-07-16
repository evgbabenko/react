import React, { Component } from 'react';
import Title from '../title';

import './task-list.css';

function blabla() {
    alert('Bla-Bla')
}
export default class TaskList extends Component {
    state = { TaskArr: this.props.TaskArr }
    update () {
    setInterval(() => {
        this.setState({TaskArr: this.props.TaskArr})
    }, 1000);
    }
    
    render() {
        this.update();
        console.log(this.state.TaskArr);
        if (this.state.TaskArr.length > 0) {
            return (
                <div>
                    <ul className='list'>
                        {this.state.TaskArr.map((task, i) => {
                            return (
                                <li className='item' key={i * 5 + 'b'}>{task}
                                    <div onClick={blabla} className='icon-edit'><i className="fas fa-edit"></i></div>
                                    <div className='icon-erase'><i className="fas fa-eraser"></i></div>
                                </li>
                            )
                        }
                        )}
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
}