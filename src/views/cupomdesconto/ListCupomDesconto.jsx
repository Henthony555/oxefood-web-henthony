import axios from 'axios';
import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Icon, Table } from 'semantic-ui-react';
import { ENDERECO_API } from "../../util/Constantes"

class ListCupomDesconto extends React.Component {

    state = {

        listaCupomDesconto: []

    }

    componentDidMount = () => {

        this.carregarLista();

    }
    carregarLista = () => {

        axios.get(ENDERECO_API + "api/cupomDesconto")
            .then((response) => {

                this.setState({
                    listaCupomDesconto: response.data
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
    render() {
        return (
            <div>

                <div style={{ marginTop: '3%' }}>

                    <Container textAlign='justified' >

                        <h2> Cupom de Desconto </h2>

                        <Divider />

                        <div style={{ marginTop: '4%' }}>
                            <Link to={'/form-cupomDesconto'}>
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
                                        <Table.HeaderCell>Código</Table.HeaderCell>
                                        <Table.HeaderCell>Percentual Desconto</Table.HeaderCell>
                                        <Table.HeaderCell>Valor Desconto</Table.HeaderCell>
                                        <Table.HeaderCell>Valor Minimo Permitido</Table.HeaderCell>
                                        <Table.HeaderCell>Quantidade Máxima</Table.HeaderCell>
                                        <Table.HeaderCell>Inicio da Vigência</Table.HeaderCell>
                                        <Table.HeaderCell>Fim da Vigência</Table.HeaderCell>
                                        <Table.HeaderCell textAlign='center' width={2}>Ações</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>

                                    {this.state.listaCupomDesconto.map(cupomDesconto => (

                                        <Table.Row key={cupomDesconto.id}>
                                            <Table.Cell>{cupomDesconto.codigoDesconto}</Table.Cell>
                                            <Table.Cell>{cupomDesconto.percentualDesconto}</Table.Cell>
                                            <Table.Cell>{cupomDesconto.valorDesconto}</Table.Cell>
                                            <Table.Cell>{cupomDesconto.valorMinimoPedidoPermitido}</Table.Cell>
                                            <Table.Cell>{cupomDesconto.quantidadeMaximaUso}</Table.Cell>
                                            <Table.Cell>{this.formatarData(cupomDesconto.inicioVigencia)}</Table.Cell>
                                            <Table.Cell>{this.formatarData(cupomDesconto.fimVigencia)}</Table.Cell>
                                            <Table.Cell textAlign='center'>

                                                <Button
                                                    inverted
                                                    circular
                                                    icon='edit'
                                                    color='blue'
                                                    itle='Clique aqui para editar os dados deste Cupom de Desconto' /> &nbsp;
                                                <Button
                                                    inverted
                                                    circular
                                                    icon='trash'
                                                    color='red'
                                                    title='Clique aqui para remover este Cupom de Desconto' />

                                            </Table.Cell>
                                        </Table.Row>
                                    ))}

                                </Table.Body>
                            </Table>
                        </div>
                    </Container>
                </div>
            </div>
        )
    }
}

export default ListCupomDesconto;