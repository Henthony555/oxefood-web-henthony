import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon, Message } from 'semantic-ui-react';
import { ENDERECO_API } from "../../util/Constantes"

class FormCupomDesconto extends React.Component {

    state = {

        codigoDesconto: null,
        percentualDesconto: null,
        valorDesconto: null,
        valorMinimoPedidoPermitido: null,
        quantidadeMaximaUso: null,
        inicioVigencia: null,
        fimVigencia: null,

        successMessage: null,
        errorMessage: null
    }

    limparCampos = () => {
        this.setState({
            codigoDesconto: '',
            percentualDesconto: '',
            valorDesconto: '',
            valorMinimoPedidoPermitido: '',
            quantidadeMaximaUso: '',
            inicioVigencia: '',
            fimVigencia: ''
        });
    };

    limparMensagem = () => {
        this.setState({
            successMessage: null,
            errorMessage: null
        });
    };

    salvar = () => {

        let cupomDescontoRequest = {

            codigoDesconto: this.state.codigoDesconto,
            percentualDesconto: this.state.percentualDesconto,
            valorDesconto: this.state.valorDesconto,
            valorMinimoPedidoPermitido: this.state.valorMinimoPedidoPermitido,
            quantidadeMaximaUso: this.state.quantidadeMaximaUso,
            inicioVigencia: this.state.inicioVigencia,
            fimVigencia: this.state.fimVigencia
        }

        axios.post(ENDERECO_API + "api/cupomDesconto", cupomDescontoRequest)
            .then((response) => {
                this.setState({ successMessage: 'Cupom de Desconto cadastrado com sucesso.', errorMessage: null });
                this.limparCampos();

                setTimeout(() => {
                    this.limparMensagem();
                }, 3000);
            })
            .catch((error) => {
                this.setState({ errorMessage: 'Erro ao incluir o Cupom de Desconto.', successMessage: null });

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

                        <h2> <span style={{ color: 'darkgray' }}> Cupom de Desconto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                        <Divider />

                        {this.state.successMessage && <Message positive>{this.state.successMessage}</Message>}
                        {this.state.errorMessage && <Message negative>{this.state.errorMessage}</Message>}

                        <div style={{ marginTop: '4%' }}>

                            <Form>

                                <Form.Group widths='equal'>

                                    <Form.Input
                                        required
                                        width={8}
                                        fluid
                                        label='Código'
                                        value={this.state.codigoDesconto}
                                        onChange={e => this.setState({ codigoDesconto: e.target.value })}
                                    />

                                    <Form.Input
                                    width={4}
                                        fluid
                                        label='Percentual Desconto'
                                        value={this.state.percentualDesconto}
                                        onChange={e => this.setState({ percentualDesconto: e.target.value })}
                                    />

                                    <Form.Input
                                    width={4}
                                        fluid
                                        label='Valor Desconto'
                                        value={this.state.valorDesconto}
                                        onChange={e => this.setState({ valorDesconto: e.target.value })}
                                    />

                                </Form.Group>

                                <Form.Group widths='equal'>

                                    <Form.Input
                                        fluid
                                        label='Valor Minimo Permitido para o Pedido'
                                        value={this.state.valorMinimoPedidoPermitido}
                                        onChange={e => this.setState({ valorMinimoPedidoPermitido: e.target.value })}
                                    />

                                    <Form.Input
                                        fluid
                                        label='Quantidade Máxima de Uso por Cliente'
                                        value={this.state.quantidadeMaximaUso}
                                        onChange={e => this.setState({ quantidadeMaximaUso: e.target.value })}
                                    />

                                </Form.Group>

                                <Form.Group>

                                        <Form.Input
                                        width={4}
                                            fluid
                                            label='Inicio da Vigência'
                                        >
                                            <InputMask
                                                mask="99/99/9999"
                                                maskChar={null}
                                                placeholder="Ex: 20/01/2005"
                                                value={this.state.inicioVigencia}
                                                onChange={e => this.setState({ inicioVigencia: e.target.value })}
                                            />
                                        </Form.Input>

                                        <Form.Input
                                        width={4}
                                            fluid
                                            label='Fim da Vigência'
                                        >
                                            <InputMask
                                                mask="99/99/9999"
                                                maskChar={null}
                                                placeholder="Ex: 18/03/2005"
                                                value={this.state.fimVigencia}
                                                onChange={e => this.setState({ fimVigencia: e.target.value })}
                                            />
                                        </Form.Input>

                                    </Form.Group>

                                <Form.Group widths='equal' style={{ marginTop: '4%' }} className='form--empresa-salvar'>

                                    <Container textAlign='left'>
                                        <Link to={'/list-cupomDesconto'}>
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

export default FormCupomDesconto;