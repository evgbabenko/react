import React, { Component } from 'react'

import './title.css';

export default class Title extends Component {
  render() {
    return (
        <div>
            <h3>{this.props.text}</h3>
        </div>
    )
  }
}
