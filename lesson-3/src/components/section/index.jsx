import React, { Component } from 'react'
import { requestData } from '../../request';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default class Section extends Component {
    state = {
        allCurrency: null,
    };
    componentDidMount() {
        requestData(this.props.url).then((result) => {
            this.setState(({ allCurrency }) => {
                return {
                    allCurrency: result
                }
            })
        })
    }
    componentDidUpdate() {
        requestData(this.props.url).then((result) => {
            this.setState(({ allCurrency }) => {
                return {
                    allCurrency: result
                }
            })
        })        
    }
    render() {
        const { allCurrency } = this.state;
        return (
            <div>
                <table>
                    <tr>
                        <td>Наименование валюты</td>
                        <td>Курс</td>
                        <td>Код</td>
                    </tr>
                    {
                        Array.isArray(allCurrency) ?
                            allCurrency.map((e, i) => {
                                return (
                                    <tr key={i * 21 + 'cc'}>
                                        <td>{e.txt}</td>
                                        <td>{e.rate ? e.rate.toFixed(2): e.value}</td>
                                        <td>{e.cc}</td>
                                    </tr>
                                )
                            }) : (<Box sx={{ display: 'flex' }}>
                                <CircularProgress />
                            </Box>
                            )
                    }
                </table>
            </div>
        )
    }
}