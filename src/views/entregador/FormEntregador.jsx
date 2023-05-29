import axios from "axios";
import React, { useEffect, useState } from "react";
import InputMask from 'react-input-mask';
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon, Message } from 'semantic-ui-react';
import { ENDERECO_API } from "../../util/Constantes"

const countryOptions = [
    { key: 'bh', value: 'bh', text: 'BH' },
    { key: 'pe', value: 'pe', text: 'PE' },
]

export default function FormEntregador() {

    const { state } = useLocation();

    const [idEntregador, setIdEntregador] = useState();
    const [nome, setNome] = useState();
    const [cpf, setCpf] = useState();
    const [rg, setRg] = useState();
    const [dataNascimento, setDataNascimento] = useState();
    const [foneCelular, setFoneCelular] = useState();
    const [foneFixo, setFoneFixo] = useState();
    const [qtdEntregasRealizadas, setQtdEntregasRealizadas] = useState();
    const [valorFrete, setValorFrete] = useState();
    const [enderecoRua, setEnderecoRua] = useState();
    const [enderecoNumero, setEnderecoNumero] = useState();
    const [enderecoBairro, setEnderecoBairro] = useState();
    const [enderecoCidade, setEnderecoCidade] = useState();
    const [enderecoCep, setEnderecoCep] = useState();
    const [enderecoUf, setEnderecoUf] = useState();
    const [enderecoComplemento, setEnderecoComplemento] = useState();
    const [ativo, setAtivo] = useState(true);

    function salvar() {

        let entregadorRequest = {

            nome: nome,
            cpf: cpf,
            rg: rg,
            dataNascimento: dataNascimento,
            foneCelular: foneCelular,
            foneFixo: foneFixo,
            qtdEntregasRealizadas: qtdEntregasRealizadas,
            valorFrete: valorFrete,
            enderecoRua: enderecoRua,
            enderecoNumero: enderecoNumero,
            enderecoBairro: enderecoBairro,
            enderecoCidade: enderecoCidade,
            enderecoCep: enderecoCep,
            enderecoUf: enderecoUf,
            enderecoComplemento: enderecoComplemento,
            ativo: ativo
        }

        if (idEntregador != null) { //Atualizar:
            axios.put(ENDERECO_API + "api/entregador/" + idEntregador, entregadorRequest)
                .then((response) => { console.log('Entregador alterado com sucesso.') })
                .catch((error) => { console.log('Erro ao alter um entregador.') })
        } else { //Cadastro:
            axios.post(ENDERECO_API + "api/entregador", entregadorRequest)
                .then((response) => { console.log('Entregador cadastrado com sucesso.') })
                .catch((error) => { console.log('Erro ao incluir o entregador.') })
        }
    }

    function formatarData(dataParam){

        if (dataParam == null || dataParam == '') {
            return ''
        }

        let dia = dataParam.substr(8, 2);
        let mes = dataParam.substr(5, 2);
        let ano = dataParam.substr(0, 4);
        let dataFormatada = dia + '/' + mes + '/' + ano;

        return dataFormatada
    };

    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get(ENDERECO_API + "api/entregador/" + state.id)
                .then((response) => {
                    setIdEntregador(response.data.id)
                    setNome(response.data.nome)
                    setCpf(response.data.cpf)
                    setRg(response.data.rg)
                    setDataNascimento(formatarData(response.data.dataNascimento))
                    setFoneCelular(response.data.foneCelular)
                    setFoneFixo(response.data.foneFixo)
                    setQtdEntregasRealizadas(response.data.qtdEntregasRealizadas)
                    setValorFrete(response.data.valorFrete)
                    setEnderecoRua(response.data.enderecoRua)
                    setEnderecoNumero(response.data.enderecoNumero)
                    setEnderecoBairro(response.data.enderecoBairro)
                    setEnderecoCidade(response.data.enderecoCidade)
                    setEnderecoCep(response.data.enderecoCep)
                    setEnderecoUf(response.data.enderecoUf)
                    setEnderecoComplemento(response.data.enderecoComplemento)
                    setAtivo(response.data.ativo)
                })
        }
    }, [state])

    return (
        <div>

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    {idEntregador === undefined &&
                        <h2> <span style={{ color: 'darkgray' }}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
                    }
                    {idEntregador != undefined &&
                        <h2> <span style={{ color: 'darkgray' }}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
                    }

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Nome'
                                    maxLength="100"
                                    value={nome}
                                    onChange={e => setNome(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    width={6}
                                    label='CPF'>
                                    <InputMask
                                        mask="999.999.999-99"
                                        value={cpf}
                                        onChange={e => setCpf(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    width={6}
                                    label='RG'
                                    value={rg}
                                    onChange={e => setRg(e.target.value)}
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
                                        value={dataNascimento}
                                        onChange={e => setDataNascimento(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='Fone Celular'
                                >
                                    <InputMask
                                        mask="(99) 9999.9999"
                                        value={foneCelular}
                                        onChange={e => setFoneCelular(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Fone Fixo'
                                >
                                    <InputMask
                                        mask="(99) 9999.9999"
                                        value={foneFixo}
                                        onChange={e => setFoneFixo(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='QTD Entregas Realizadas'
                                    value={qtdEntregasRealizadas}
                                    onChange={e => setQtdEntregasRealizadas(e.target.value)}
                                >
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Valor Por Frete'
                                    value={valorFrete}
                                    onChange={e => setValorFrete(e.target.value)}
                                >
                                </Form.Input>

                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    fluid
                                    label='Rua'
                                    value={enderecoRua}
                                    onChange={e => setEnderecoRua(e.target.value)}
                                />

                                <Form.Input
                                    width={4}
                                    fluid
                                    label='Número'
                                    value={enderecoNumero}
                                    onChange={e => setEnderecoNumero(e.target.value)}
                                >
                                </Form.Input>

                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    fluid
                                    label='Bairro'
                                    value={enderecoBairro}
                                    onChange={e => setEnderecoBairro(e.target.value)}
                                />

                                <Form.Input
                                    fluid
                                    label='Cidade'
                                    value={enderecoCidade}
                                    onChange={e => setEnderecoCidade(e.target.value)}
                                />

                                <Form.Input
                                    width={4}
                                    fluid
                                    label='CEP'>
                                    <InputMask
                                        mask="99999-999"
                                        value={enderecoCep}
                                        onChange={e => setEnderecoCep(e.target.value)}
                                    />
                                </Form.Input>

                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Select
                                    label='UF'
                                    placeholder='Selecione'
                                    fluid
                                    options={countryOptions}
                                    value={enderecoUf}
                                    onChange={(e, { value }) => {
                                        setEnderecoUf(value)
                                    }}
                                />

                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    fluid
                                    label='Complemento'
                                    value={enderecoComplemento}
                                    onChange={e => setEnderecoComplemento(e.target.value)}
                                >
                                </Form.Input>

                            </Form.Group>

                            <Form.Group inline>

                                <label>Ativo:</label>
                                <Form.Radio
                                    label='Sim'
                                    checked={ativo}
                                    onChange={() => setAtivo(true)}
                                />
                                <Form.Radio
                                    label='Não'
                                    checked={!ativo}
                                    onChange={() => setAtivo(false)}
                                />

                            </Form.Group>

                            <Form.Group widths='equal' style={{ marginTop: '4%' }} className='form--empresa-salvar'>

                                <Container textAlign='left'>
                                    <Button
                                        type="button"
                                        inverted
                                        as={Link}
                                        to='/list-entregador'
                                        circular
                                        icon
                                        labelPosition='left'
                                        color='orange'
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
                                        onClick={() => salvar()}
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
};