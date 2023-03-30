import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';

class FormCliente extends React.Component {

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

                                <Form.Group>

                                    <Form.Input
                                        fluid
                                        label='DT Nascimento'
                                        width={6}>

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
                                        width={6}>
                                        <InputMask
                                            mask="(99) 9999.9999" />
                                    </Form.Input>

                                    <Form.Input
                                        fluid
                                        label='Fone Fixo'
                                        width={6}>
                                            <InputMask
											mask="(99) 9999.9999" />
                                    </Form.Input>

                                    <Form.Input
                                        fluid
                                        label='QTD Entregas Realizadas'
                                        width={6}>
                                    </Form.Input>

                                    <Form.Input
                                        fluid
                                        label='Valor Por Frete'
                                        width={6}>
                                    </Form.Input>

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
                                            Listar
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