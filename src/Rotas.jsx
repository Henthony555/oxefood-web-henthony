import React from 'react';
import { Route, Routes } from "react-router-dom";



import Home from './views/home/Home';

import ListProduto from './views/produto/ListProduto';
import ListCliente from './views/cliente/ListCliente';
import ListMaterial from './views/material/ListMaterial';
import ListCupomDesconto from './views/cupomdesconto/ListCupomDesconto';
import ListEntregador from './views/entregador/ListEntregador';

import FormProduto from './views/produto/FormProduto';
import FormCliente from './views/cliente/FormCliente';
import FormMaterial from './views/material/FormMaterial';
import FormCupomDesconto from './views/cupomdesconto/FormCupomDesconto';
import FormEntregador from './views/entregador/FormEntregador';

function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="list-cliente" element={ <ListCliente/> } />
                <Route path="list-material" element={ <ListMaterial/> } />
                <Route path="list-cupomDesconto" element={ <ListCupomDesconto/> } />
                <Route path="list-produto" element={ <ListProduto/> } />
                <Route path="list-entregador" element={ <ListEntregador/> } />

                <Route path="form-cliente" element={ <FormCliente/> } />
                <Route path="form-material" element={ <FormMaterial/> } />
                <Route path="form-cupomDesconto" element={ <FormCupomDesconto/> } />
                <Route path="form-produto" element={ <FormProduto/> } />
                <Route path="form-entregador" element={ <FormEntregador/> } />
            </Routes>
        </>
    )
}

export default Rotas