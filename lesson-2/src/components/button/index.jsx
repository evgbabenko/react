import React, { Component } from 'react'
import './button.css'

const Button = ({onUpdateCounter, sing}) => {
    return (
        <div className='btn' onClick={()=>{onUpdateCounter(sing)}}> {sing} 
        </div>
    )
}

export default Button;