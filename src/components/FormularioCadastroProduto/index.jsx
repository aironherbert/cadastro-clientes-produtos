import React, { useState, Fragment } from 'react';
import { Button, TextField, Typography } from "@material-ui/core";
import { useHistory } from 'react-router-dom';

export default function FormularioCadastroProduto() {
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [preco, setPreco] = useState("");
    const history = useHistory();

    function aoEnviar(dados) {
        let produtos = [];
        if (JSON.parse(localStorage.getItem('@produtos')) !== null){
            produtos=JSON.parse(localStorage.getItem('@produtos'));
        }
        produtos.push(dados);
        localStorage.setItem('@produtos', JSON.stringify(produtos));
        limparFormulario();
    }

    function limparFormulario(){
        setNome('');
        setDescricao('');
        setPreco('');
    }

    return (
        <Fragment>
            <Button variant='contained' onClick={() => history.push('/')}>Voltar</Button>
            <Typography variant="h3" component="h1" align="center">
                Cadastro de Produtos
            </Typography>
            <form onSubmit={(event) => {
                event.preventDefault();
                aoEnviar({ nome, descricao, preco })
            }}>
                <TextField id="nome" label="Nome" variant="outlined" fullWidth margin="normal"
                    onChange={event => { setNome(event.target.value) }} value={nome} />

                <TextField id="descricao" label="Descrição" variant="outlined" fullWidth margin="normal"
                    onChange={event => { setDescricao(event.target.value) }} value={descricao} />

                <TextField id="preco" label="Preço" variant="outlined" fullWidth margin="normal"
                    onChange={event => { setPreco(event.target.value) }} value={preco} />

                <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
            </form>

        </Fragment>
    );
}
