import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './components/Home/';
import FormularioCadastroCliente from './components/FormularioCadastroCliente';
import FormularioCadastroProduto from './components/FormularioCadastroProduto';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/clientes' component={FormularioCadastroCliente} />
                <Route path='/produtos' component={FormularioCadastroProduto} />
            </Switch>
        </BrowserRouter>
    );
}