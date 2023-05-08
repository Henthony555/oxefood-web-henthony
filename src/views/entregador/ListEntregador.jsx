import axios from 'axios';
import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Icon, Modal, Table } from 'semantic-ui-react';

class ListEntregador extends React.Component {

    state = {

        listaEntregadores: [],
        open: false

    }

    componentDidMount = () => {

        this.carregarLista();

    }
    carregarLista = () => {

        axios.get("http://localhost:8082/api/entregador")
            .then((response) => {

                this.setState({
                    listaEntregadores: response.data
                })
            })

    };

    formatarData = (dataParam) => {

        if (dataParam == null || dataParam == '') {
            return ''
        }

        let dia = dataParam.substr(8, 2);
        let mes = dataParam.substr(5, 2);
        let ano = dataParam.substr(0, 4);
        let dataFormatada = dia + '/' + mes + '/' + ano;

        return dataFormatada
    };

    setOpen = () => {

        if(this.state.open){
            this.setState({
                open: false
            })
        }else{
            this.setState({
                open: true
            })
        }

        
    };



    render() {
        return (
            <>
                <div>

                    <div style={{ marginTop: '3%' }}>

                        <Container textAlign='justified' >

                            <h2> Entregador </h2>

                            <Divider />

                            <div style={{ marginTop: '4%' }}>
                                <Link to={'/form-entregador'}>
                                    <Button
                                        inverted
                                        circular
                                        icon
                                        labelPosition='left'
                                        color='orange'
                                        floated='right'
                                    >
                                        <Icon name='clipboard outline' />
                                        Novo
                                    </Button>
                                </Link>
                                <br /><br /><br />

                                <Table color='orange' sortable celled>

                                    <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell>Nome</Table.HeaderCell>
                                            <Table.HeaderCell>CPF</Table.HeaderCell>
                                            <Table.HeaderCell>RG</Table.HeaderCell>
                                            <Table.HeaderCell>Data de Nascimento</Table.HeaderCell>
                                            <Table.HeaderCell>Fone Celular</Table.HeaderCell>
                                            <Table.HeaderCell>Fone Fixo</Table.HeaderCell>
                                            <Table.HeaderCell>...</Table.HeaderCell>
                                            <Table.HeaderCell textAlign='center' width={3}>Ações</Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>

                                    <Table.Body>

                                        {this.state.listaEntregadores.map(entregador => (

                                            <Table.Row>
                                                <Table.Cell>{entregador.nome}</Table.Cell>
                                                <Table.Cell>{entregador.cpf}</Table.Cell>
                                                <Table.Cell>{entregador.rg}</Table.Cell>
                                                <Table.Cell>{this.formatarData(entregador.dataNascimento)}</Table.Cell>
                                                <Table.Cell>{entregador.foneCelular}</Table.Cell>
                                                <Table.Cell>{entregador.foneFixo}</Table.Cell>
                                                <Table.Cell>...</Table.Cell>
                                                <Table.Cell textAlign='center'>

                                                <Button
                                                        onClick={() => this.setOpen()}
                                                        inverted
                                                        circular
                                                        icon='eye'
                                                        color='orange'
                                                        itle='Clique aqui para ver todos os dados deste entregador' />&nbsp;

                                                    <Button
                                                        inverted
                                                        circular
                                                        icon='edit'
                                                        color='blue'
                                                        itle='Clique aqui para editar os dados deste entregador' /> &nbsp;
                                                    <Button
                                                        inverted
                                                        circular
                                                        icon='trash'
                                                        color='red'
                                                        title='Clique aqui para remover este entregador' />

                                                </Table.Cell>
                                            </Table.Row>
                                        ))}

                                    </Table.Body>
                                </Table>
                            </div>
                        </Container>
                    </div>
                </div>


                <Modal
                    open={this.state.open}
                    onClose={() => this.setOpen()}
                    onOpen={() => this.setOpen()}
                >
                    <Modal.Header>Entregador</Modal.Header>
                    <Modal.Content scrolling>

                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={() => this.setOpen()} color='orange'>
                            Voltar <Icon name='chevron right' />
                        </Button>
                    </Modal.Actions>
                </Modal>
            </>
        )

    }
}

export default ListEntregador;