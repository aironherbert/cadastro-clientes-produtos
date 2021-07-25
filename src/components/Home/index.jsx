import React from 'react';
import {useHistory} from 'react-router-dom'
import { Button, Container } from '@material-ui/core';
import './index.css'

export default function index() {
    const history = useHistory();
    return (
        <div className="container">
            <Container maxWidth="sm" style={{display: 'flex', justifyContent: 'center'}}>
                <Button variant='contained' color='primary' onClick={() => history.push('./clientes')} >Clientes</Button>
                <Button variant='contained' color='secondary' onClick={() => history.push('./produtos')} >Produtos</Button>
            </Container>
        </div>
    )
}
