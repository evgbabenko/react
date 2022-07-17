import React, { Component } from 'react';
import Display from '../display';
import Button from '../button';
import './App.css'

export default class App extends Component {
  state = {counter: 0}
  onUpdateCounter = (sing) => {
    if (sing === '+')
    {
      this.setState(({ counter }) => {
        return {
          counter: (counter+1)
        }
      }
      )  
    }
    else if (sing === '-')
    {
      this.setState(({ counter }) => {
        return {
          counter: (counter-1)
        }
      }
      )  
    }
  }

  onResetCounter = () => {
    this.setState( {counter: 0})
  }

  render() {
    const { counter } = this.state;
    return (
      <div className='wrap'>
        <Button onUpdateCounter={this.onUpdateCounter}  sing='+' />
        <Display onResetCounter={this.onResetCounter} counter={counter} />
        <Button onUpdateCounter={this.onUpdateCounter} sing='-'/>
      </div>
    )
  }
}

//
//