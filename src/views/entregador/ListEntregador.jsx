import axios from 'axios';
import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Icon, Modal, Table } from 'semantic-ui-react';

class ListEntregador extends React.Component {

    state = {

        listaEntregadores: [],
        open: false,
        entregadorSelecionado: null

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

    setOpen = (id) => {
        if (id) {
          axios.get(`http://localhost:8082/api/entregador/${id}`)
            .then((response) => {
              this.setState({
                entregadorSelecionado: response.data,
                open: true
              })
            })
        } else {
          this.setState({ open: false });
        }
      };



    render() {
        const  dadosModal  = this.state.entregadorSelecionado;
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

                                            <Table.Row key={entregador.id}>
                                                <Table.Cell>{entregador.nome}</Table.Cell>
                                                <Table.Cell>{entregador.cpf}</Table.Cell>
                                                <Table.Cell>{entregador.rg}</Table.Cell>
                                                <Table.Cell>{this.formatarData(entregador.dataNascimento)}</Table.Cell>
                                                <Table.Cell>{entregador.foneCelular}</Table.Cell>
                                                <Table.Cell>{entregador.foneFixo}</Table.Cell>
                                                <Table.Cell>...</Table.Cell>
                                                <Table.Cell textAlign='center'>

                                                <Button
                                                        onClick={() => this.setOpen(entregador.id)}
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

                {dadosModal && (
                <Modal
                    open={this.state.open}
                    onClose={() => this.setOpen()}
                    onOpen={() => this.setOpen()}
                >
                    <Modal.Header>
                    <Icon name='motorcycle' /> {dadosModal.nome}
                    </Modal.Header>
                    <Modal.Content scrolling>
                    
                            <>
                                <h5>CPF: {dadosModal.cpf}</h5>
                                <h5>RG: {dadosModal.rg}</h5>
                                <h5>Data de Nascimento: {this.formatarData(dadosModal.dataNascimento)}</h5>
                                <h5>Fone Celular: {dadosModal.foneCelular}</h5>
                                <h5>Fone Fixo: {dadosModal.foneFixo}</h5>
                                <h5>qtdEntregasRealizadas: {dadosModal.qtdEntregasRealizadas}</h5>
                                <h5>valorFrete: {dadosModal.valorFrete}</h5>
                                <h5>enderecoRua: {dadosModal.enderecoRua}</h5>
                                <h5>enderecoNumero: {dadosModal.enderecoNumero}</h5>
                                <h5>enderecoBairro: {dadosModal.enderecoBairro}</h5>
                                <h5>enderecoCidade: {dadosModal.enderecoCidade}</h5>
                                <h5>enderecoCep: {dadosModal.enderecoCep}</h5>
                                <h5>enderecoUf: {dadosModal.enderecoUf}</h5>
                                <h5>enderecoComplemento: {dadosModal.enderecoComplemento}</h5>
                                <h5>ativo: {this.formatarAtivo(dadosModal.ativo)}</h5>
                            </>
                       
                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={() => this.setOpen()} color='orange'>
                            Voltar <Icon name='chevron right' />
                        </Button>
                    </Modal.Actions>
                </Modal>
                 )}
            </>
        )

    }
}

export default ListEntregador;