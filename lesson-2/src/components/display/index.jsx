import React, { Component } from 'react';
import './display.css';

const Display =({onResetCounter, counter}) =>{
    
    return (
            <main>
            <div onClick={()=>{onResetCounter()}} className='display'>
                {counter}
            </div>
            </main>
        )
    
}
export default Display;