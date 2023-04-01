import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon, Select } from 'semantic-ui-react';

const countryOptions = [
    { key: 'bh', value: 'bh', text: 'BH' },
    { key: 'pe', value: 'pe', text: 'PE' },
]

class FormCliente extends React.Component {
    state = {}

    handleChange = (e, { value }) => this.setState({ value })

    render() {
        const { value } = this.state
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
                                    />

                                    <Form.Input
                                        required
                                        fluid
                                        width={6}
                                        label='CPF'>
                                        <InputMask
                                            mask="999.999.999-99" />
                                    </Form.Input>

                                    <Form.Input
                                        required
                                        fluid
                                        width={6}
                                        label='RG'>
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
                                        />
                                    </Form.Input>

                                    <Form.Input
                                        required
                                        fluid
                                        label='Fone Celular'
                                    >
                                        <InputMask
                                            mask="(99) 9999.9999" />
                                    </Form.Input>

                                    <Form.Input
                                        fluid
                                        label='Fone Fixo'
                                    >
                                        <InputMask
                                            mask="(99) 9999.9999" />
                                    </Form.Input>

                                    <Form.Input
                                        fluid
                                        label='QTD Entregas Realizadas'
                                    >
                                    </Form.Input>

                                    <Form.Input
                                        fluid
                                        label='Valor Por Frete'
                                    >
                                    </Form.Input>

                                </Form.Group>

                                <Form.Group widths='equal'>

                                    <Form.Input
                                        fluid
                                        label='Rua'
                                    />

                                    <Form.Input
                                        width={4}
                                        fluid
                                        label='Número'>
                                    </Form.Input>

                                </Form.Group>

                                <Form.Group widths='equal'>

                                    <Form.Input
                                        fluid
                                        label='Bairro'
                                    />

                                    <Form.Input
                                        fluid
                                        label='Cidade'
                                    />

                                    <Form.Input
                                        width={4}
                                        fluid
                                        label='CEP'>
                                        <InputMask
                                            mask="12345-123" />
                                    </Form.Input>

                                </Form.Group>

                                <Form.Group widths='equal'>

                                    <Form.Input
                                        fluid
                                        label='UF'>
                                        <Select placeholder='Selecione' fluid options={countryOptions} />
                                    </Form.Input>

                                </Form.Group>

                                <Form.Group widths='equal'>

                                    <Form.Input
                                        fluid
                                        label='Complemento'>
                                    </Form.Input>

                                </Form.Group>

                                <Form.Group inline>

                                    <label>Ativo:</label>
                                    <Form.Radio
                                        label='Sim'
                                        value='sim'
                                        checked={value === 'sim'}
                                        onChange={this.handleChange}
                                    />
                                    <Form.Radio
                                        label='Não'
                                        value='nao'
                                        checked={value === 'nao'}
                                        onChange={this.handleChange}
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

export default FormCliente;