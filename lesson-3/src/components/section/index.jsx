import React, { Component } from 'react'
import { requestData } from '../../request';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


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
            <TableContainer component={Paper}>
                <Table sx={{ maxWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Назва валюти</TableCell>
                            <TableCell align="right">Курс</TableCell>
                            <TableCell align="right">Код</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Array.isArray(allCurrency) ?
                            allCurrency.map((e, i) => {
                                return (
                                    <TableRow key={i * 21 + 'cc'} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell component="th" scope="row">{e.txt}</TableCell>
                                        <TableCell align="right">{e.rate ? e.rate.toFixed(2) : e.value}</TableCell>
                                        <TableCell align="right">{e.cc}</TableCell>
                                    </TableRow>
                                )
                            }) : (<Box sx={{ display: 'flex' }}><CircularProgress /></Box>)}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}