import axios from 'axios';
import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Icon, Modal, Table } from 'semantic-ui-react';

class ListEntregador extends React.Component {

    state = {

        listaEntregadores: [],
        open: false,
        dadosEntregador: null

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

    formatarAtivo = (ativoParam) => {

        let ativoFormatado

        if(ativoParam == true){
            ativoFormatado = "Sim";
        }else{
            ativoFormatado = "Não";
        };

        return ativoFormatado
    };

    setOpen = (entregador) => {
        this.setState({
            open: !this.state.open,
            dadosEntregador: entregador
        });
    }



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
                                                        onClick={() => this.setOpen(entregador)}
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
                    onClose={() => this.setOpen(null)} 
                    onOpen={() => this.setOpen(null)} 
                >
                    <Modal.Header>
                      <Icon name='motorcycle' /> {this.state.dadosEntregador && this.state.dadosEntregador.nome}
                    </Modal.Header>
                    <Modal.Content scrolling>
                        {this.state.dadosEntregador && (
                            <>
                                <h5>CPF: {this.state.dadosEntregador.cpf}</h5>
                                <h5>RG: {this.state.dadosEntregador.rg}</h5>
                                <h5>Data de Nascimento: {this.formatarData(this.state.dadosEntregador.dataNascimento)}</h5>
                                <h5>Fone Celular: {this.state.dadosEntregador.foneCelular}</h5>
                                <h5>Fone Fixo: {this.state.dadosEntregador.foneFixo}</h5>
                                <h5>qtdEntregasRealizadas: {this.state.dadosEntregador.qtdEntregasRealizadas}</h5>
                                <h5>valorFrete: {this.state.dadosEntregador.valorFrete}</h5>
                                <h5>enderecoRua: {this.state.dadosEntregador.enderecoRua}</h5>
                                <h5>enderecoNumero: {this.state.dadosEntregador.enderecoNumero}</h5>
                                <h5>enderecoBairro: {this.state.dadosEntregador.enderecoBairro}</h5>
                                <h5>enderecoCidade: {this.state.dadosEntregador.enderecoCidade}</h5>
                                <h5>enderecoCep: {this.state.dadosEntregador.enderecoCep}</h5>
                                <h5>enderecoUf: {this.state.dadosEntregador.enderecoUf}</h5>
                                <h5>enderecoComplemento: {this.state.dadosEntregador.enderecoComplemento}</h5>
                                <h5>ativo: {this.formatarAtivo(this.state.dadosEntregador.ativo)}</h5>
                            </>
                        )}
                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={() => this.setOpen(null)} color='orange'>
                            Voltar <Icon name='chevron right' />
                        </Button>
                    </Modal.Actions>
                </Modal>
            </>
        )

    }
}

export default ListEntregador;