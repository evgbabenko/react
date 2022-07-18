import React, { Component } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './main.css';

import Btn from '../button';
import Section from '../section';


const currency = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
const banks = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/basindbank?date=20160101&period=m&json';
const agr = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/monetary?sort=ind&order=asc&date=yyyymmdd&json';


export default class Main extends Component {
  render() {
    return (
      <main>
        
          <header>
            <Link to='/'><Btn btnName='Офіційний курс гривні до іноземних валют та облікова ціна банківських металів' /></Link>
            <Link to='/bank'><Btn btnName='Основні показники діяльності банків України' /></Link>
            <Link to='/agr'><Btn btnName='Грошові агрегати' /></Link>
        </header>
        <Routes>
          <Route path="/" element={<Section url={currency} />} />
          <Route path="/bank" element={<Section url={banks} />} />
          <Route path="/agr" element={<Section url={agr} />} />
        </Routes>
      </main>
    );
  }
}