import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon, Message } from 'semantic-ui-react';
import { ENDERECO_API } from "../../util/Constantes"

class FormMaterial extends React.Component {

    state = {

        titulo: null,
        valor: null,
        resposavel: null,
        localizacao: null,
        peso: null,
        dataAquisicao: null,

        successMessage: null,
        errorMessage: null
    }

    limparCampos = () => {
        this.setState({
            titulo: '',
            valor: '',
            resposavel: '',
            localizacao: '',
            peso: '',
            dataAquisicao: ''
        });
    };

    limparMensagem = () => {
        this.setState({
            successMessage: null,
            errorMessage: null
        });
    };

    salvar = () => {

        let materialRequest = {

            titulo: this.state.titulo,
            valor: this.state.valor,
            resposavel: this.state.resposavel,
            localizacao: this.state.localizacao,
            peso: this.state.peso,
            dataAquisicao: this.state.dataAquisicao
        }

        axios.post(ENDERECO_API + "api/material", materialRequest)
            .then((response) => {
                this.setState({ successMessage: 'Material cadastrado com sucesso.', errorMessage: null });
                this.limparCampos();

                setTimeout(() => {
                    this.limparMensagem();
                }, 3000);
            })
            .catch((error) => {
                this.setState({ errorMessage: 'Erro ao incluir o Material.', successMessage: null });

                setTimeout(() => {
                    this.limparMensagem();
                }, 3000);
            })
    }


    render() {
        return (
            <div>

                <div style={{ marginTop: '3%' }}>

                    <Container textAlign='justified' >

                        <h2> <span style={{ color: 'darkgray' }}> Material &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                        <Divider />

                        {this.state.successMessage && <Message positive>{this.state.successMessage}</Message>}
                        {this.state.errorMessage && <Message negative>{this.state.errorMessage}</Message>}

                        <div style={{ marginTop: '4%' }}>

                            <Form>

                                <Form.Group widths='equal'>

                                    <Form.Input
                                        required
                                        fluid
                                        label='Titulo'
                                        value={this.state.titulo}
                                        onChange={e => this.setState({ titulo: e.target.value })}
                                    />

                                    <Form.Input
                                        required
                                        fluid
                                        label='Valor'
                                        value={this.state.valor}
                                        onChange={e => this.setState({ valor: e.target.value })}
                                    />

                                    <Form.Input
                                        required
                                        fluid
                                        label='Resposavel'
                                        value={this.state.resposavel}
                                        onChange={e => this.setState({ resposavel: e.target.value })}
                                    />

                                </Form.Group>

                                <Form.Group widths='equal'>

                                    <Form.Input
                                        required
                                        fluid
                                        label='Localização'
                                        value={this.state.localizacao}
                                        onChange={e => this.setState({ localizacao: e.target.value })}
                                    />

                                    <Form.Input
                                        placeholder="24kg"
                                        fluid
                                        label='Peso'
                                        value={this.state.peso}
                                        onChange={e => this.setState({ peso: e.target.value })}
                                    />

                                    <Form.Input
                                        fluid
                                        label='Data de aquisição'
                                    >
                                        <InputMask
                                            mask="99/99/9999"
                                            maskChar={null}
                                            placeholder="Ex: 20/05/2023"
                                            value={this.state.dataAquisicao}
                                            onChange={e => this.setState({ dataAquisicao: e.target.value })}
                                        />
                                    </Form.Input>

                                </Form.Group>

                                <Form.Group widths='equal' style={{ marginTop: '4%' }} className='form--empresa-salvar'>

                                    <Container textAlign='left'>
                                        <Link to={'/list-material'}>
                                            <Button
                                                type="button"
                                                inverted
                                                circular
                                                icon
                                                labelPosition='left'
                                                color='orange'
                                                onClick={this.listar}
                                            >
                                                <Icon name='reply' />
                                                Voltar
                                            </Button>
                                        </Link>
                                    </Container>

                                    <Container textAlign='right'>

                                        <Button
                                            inverted
                                            circular
                                            icon
                                            labelPosition='left'
                                            color='blue'
                                            floated='right'
                                            onClick={this.salvar}
                                        >
                                            <Icon name='save' />
                                            Salvar
                                        </Button>

                                    </Container>

                                </Form.Group>

                            </Form>
                        </div>
                    </Container>
                </div >
            </div >
        )
    }
}

export default FormMaterial;