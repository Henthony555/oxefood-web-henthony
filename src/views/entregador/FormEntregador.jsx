import axios from "axios";
import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';

const countryOptions = [
    { key: 'bh', value: 'bh', text: 'BH' },
    { key: 'pe', value: 'pe', text: 'PE' },
]

class FormEntregador extends React.Component {

    state = {
        nome: null,
		cpf: null,
		rg: null,
		dataNascimento: null,
		foneCelular: null,
		foneFixo: null,
        qtdEntregasRealizadas: null,
        valorFrete: null,
        enderecoRua: null,
        enderecoNumero: null,
        enderecoBairro: null,
        enderecoCidade: null,
        enderecoCep: null,
        enderecoUf: null,
        enderecoComplemento: null,
        ativo: true
    }

    salvar = () => {

		let entregadorRequest = {

			nome: this.state.nome,
			cpf: this.state.cpf,
            rg: this.state.rg,
			dataNascimento: this.state.dataNascimento,
			foneCelular: this.state.foneCelular,
			foneFixo: this.state.foneFixo,
            qtdEntregasRealizadas: this.state.qtdEntregasRealizadas,
            valorFrete: this.state.valorFrete,
            enderecoRua: this.state.enderecoRua,
            enderecoNumero: this.state.enderecoNumero,
            enderecoBairro: this.state.enderecoBairro,
            enderecoCidade: this.state.enderecoCidade,
            enderecoCep: this.state.enderecoCep,
            enderecoUf: this.state.enderecoUf,
            enderecoComplemento: this.state.enderecoComplemento,
            ativo: this.state.ativo
		}

		axios.post("http://localhost:8082/api/entregador", entregadorRequest)
		.then((response) => {
			console.log('Entregador cadastrado com sucesso.')
		})
		.catch((error) => {
			console.log('Erro ao incluir o um Entregador.')
		})
	}

    render() {
        return (
            <div>

                <div style={{ marginTop: '3%' }}>

                    <Container textAlign='justified' >

                        <h2> <span style={{ color: 'darkgray' }}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                        <Divider />

                        <div style={{ marginTop: '4%' }}>

                            <Form>

                                <Form.Group widths='equal'>

                                    <Form.Input
                                        required
                                        fluid
                                        label='Nome'
                                        maxLength="100"
                                        value={this.state.nome}
										onChange={e => this.setState({nome: e.target.value})}
                                    />

                                    <Form.Input
                                        required
                                        fluid
                                        width={6}
                                        label='CPF'>
                                        <InputMask
                                            mask="999.999.999-99"
                                            value={this.state.cpf}
										    onChange={e => this.setState({cpf: e.target.value})} 
                                            />
                                    </Form.Input>

                                    <Form.Input
                                        required
                                        fluid
                                        width={6}
                                        label='RG'
                                        value={this.state.rg}
										onChange={e => this.setState({rg: e.target.value})}
                                        >
                                    </Form.Input>

                                </Form.Group>

                                <Form.Group widths='equal'>

                                    <Form.Input
                                        fluid
                                        label='DT Nascimento'
                                    >

                                        <InputMask
                                            mask="99/99/9999"
                                            maskChar={null}
                                            placeholder="Ex: 20/03/1985"
                                            value={this.state.dataNascimento}
										    onChange={e => this.setState({dataNascimento: e.target.value})}
                                        />
                                    </Form.Input>

                                    <Form.Input
                                        required
                                        fluid
                                        label='Fone Celular'
                                    >
                                        <InputMask
                                            mask="(99) 9999.9999"
                                            value={this.state.foneCelular}
										    onChange={e => this.setState({foneCelular: e.target.value})}
                                        />
                                    </Form.Input>

                                    <Form.Input
                                        fluid
                                        label='Fone Fixo'
                                    >
                                        <InputMask
                                            mask="(99) 9999.9999"
                                            value={this.state.foneFixo}
										    onChange={e => this.setState({foneFixo: e.target.value})}
                                        />
                                    </Form.Input>

                                    <Form.Input
                                        fluid
                                        label='QTD Entregas Realizadas'
                                        value={this.state.qtdEntregasRealizadas}
										onChange={e => this.setState({qtdEntregasRealizadas: e.target.value})}
                                    >
                                    </Form.Input>

                                    <Form.Input
                                        fluid
                                        label='Valor Por Frete'
                                        value={this.state.valorFrete}
										onChange={e => this.setState({valorFrete: e.target.value})}
                                    >
                                    </Form.Input>

                                </Form.Group>

                                <Form.Group widths='equal'>

                                    <Form.Input
                                        fluid
                                        label='Rua'
                                        value={this.state.enderecoRua}
										onChange={e => this.setState({enderecoRua: e.target.value})}
                                    />

                                    <Form.Input
                                        width={4}
                                        fluid
                                        label='Número'
                                        value={this.state.enderecoNumero}
										onChange={e => this.setState({enderecoNumero: e.target.value})}
                                    >
                                    </Form.Input>

                                </Form.Group>

                                <Form.Group widths='equal'>

                                    <Form.Input
                                        fluid
                                        label='Bairro'
                                        value={this.state.enderecoBairro}
										onChange={e => this.setState({enderecoBairro: e.target.value})}
                                    />

                                    <Form.Input
                                        fluid
                                        label='Cidade'
                                        value={this.state.enderecoCidade}
										onChange={e => this.setState({enderecoCidade: e.target.value})}
                                    />

                                    <Form.Input
                                        width={4}
                                        fluid
                                        label='CEP'>
                                        <InputMask
                                            mask="99999-999" 
                                            value={this.state.enderecoCep}
										    onChange={e => this.setState({enderecoCep: e.target.value})}
                                        />
                                    </Form.Input>

                                </Form.Group>

                                <Form.Group widths='equal'>

                                    <Form.Select
                                    label='UF'
                                    placeholder='Selecione' 
                                    fluid 
                                    options={countryOptions}
                                    value={this.state.enderecoUf}
                                    onChange={(e, {value}) => {
                                        this.setState({enderecoUf: value})
                                     }}
                                    />

                                </Form.Group>

                                <Form.Group widths='equal'>

                                    <Form.Input
                                        fluid
                                        label='Complemento'
                                        value={this.state.enderecoComplemento}
										onChange={e => this.setState({enderecoComplemento: e.target.value})}
                                        >
                                    </Form.Input>

                                </Form.Group>

                                <Form.Group inline>

                                    <label>Ativo:</label>
                                    <Form.Radio
                                        label='Sim'
                                        checked={this.state.ativo}
										onChange={e => this.setState({ativo: true})}
                                    />
                                    <Form.Radio
                                        label='Não'
                                        checked={!this.state.ativo}
										onChange={e => this.setState({ativo: false})}
                                    />

                                </Form.Group>

                                <Form.Group widths='equal' style={{ marginTop: '4%' }} className='form--empresa-salvar'>

                                    <Container textAlign='left'>
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
                </div>
            </div>
        )
    }
}

export default FormEntregador;