import React, { Component } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './main.css';

import Button from '../button';
import Section from '../section';


const currency = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
const banks = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/basindbank?date=20160101&period=m&json';


export default class Main extends Component {
  render() {
    return (
      <main>
        
          <header>
            <Link to='/'><Button btnName='Currency' /></Link>
            <Link to='/bank'><Button btnName='Bank info' /></Link>
            <Button btnName='Djlrf' />
        </header>
        <Routes>
          <Route path="/" element={<Section url={currency} />} />
          <Route path="/bank" element={<Section url={banks} />} />
        </Routes>
      </main>
    );
  }
}