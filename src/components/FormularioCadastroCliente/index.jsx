import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, TextField, Switch, FormControlLabel, Typography } from "@material-ui/core";
import { Fragment } from 'react';

export default function FormularioCadastroCliente() {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [endereco, setEndereco] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erros, setErros] = useState({ cpf: { valido: true, text: "" } })
    const history = useHistory();

    function aoEnviar(dados) {
        let clientes = [];
        if (JSON.parse(localStorage.getItem('@clientes')) !== null){
            clientes=JSON.parse(localStorage.getItem('@clientes'));
        }
        console.log(clientes);
        clientes.push(dados);
        localStorage.setItem('@clientes', JSON.stringify(clientes));
        limparFormulario();
    }

    function limparFormulario(){
        setNome('');
        setSobrenome('');
        setEndereco('');
        setCpf('');
        setPromocoes(true);
        setNovidades(true);
    }

    function validarCPF(cpfValue) {
        if (cpfValue.length !== 11) {
            return { valido: false, texto: "CPF deve ter 11 dígitos." }
        } else {
            return { valido: true, texto: "" }
        }
    }

    return (
        <Fragment>
            <Button variant='contained' onClick={() => history.push('/')}>Voltar</Button>
            <Typography variant="h3" component="h1" align="center">
                Cadastro de Clientes
            </Typography>
            <form onSubmit={(event) => {
                event.preventDefault();
                aoEnviar({ nome, sobrenome, endereco, cpf, promocoes, novidades })
            }}>
                <TextField id="nome" label="Nome" variant="outlined" fullWidth margin="normal"
                    onChange={event => { setNome(event.target.value) }} value={nome} />

                <TextField id="sobrenome" label="Sobrenome" variant="outlined" fullWidth margin="normal"
                    onChange={event => { setSobrenome(event.target.value) }} value={sobrenome} />
                
                <TextField id="endereco" label="Endereço" variant="outlined" fullWidth margin="normal"
                    onChange={event => { setEndereco(event.target.value) }} value={endereco} />

                <TextField id="cpf" label="CPF" variant="outlined" fullWidth margin="normal" error={!erros.cpf.valido} helperText={erros.cpf.texto}
                    onBlur={(event) => {
                        const ehValido = validarCPF(cpf);
                        setErros({cpf: ehValido});
                    }}
                    onChange={event => { setCpf(event.target.value) }} value={cpf} />

                <FormControlLabel
                    control={<Switch name="promoções" color="primary"
                        onChange={event => { setPromocoes(event.target.checked) }} checked={promocoes} />}
                    label="Promoções"
                />
                <FormControlLabel
                    control={<Switch name="novidades" color="primary"
                        onChange={event => { setNovidades(event.target.checked) }} checked={novidades} />}
                    label="Novidades"
                />

                <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
            </form>
        </Fragment>
    );
}
