import React from 'react';
import { Route, Routes } from "react-router-dom";



import Home from './views/home/Home';

import ListProduto from './views/produto/ListProduto';
import ListCliente from './views/cliente/ListCliente';
import ListEntregador from './views/entregador/ListEntregador';
import ListCategoriaProduto from './views/categoriaproduto/ListCategoriaProduto';

//Prova
import ListMaterial from './views/material/ListMaterial';
import ListCupomDesconto from './views/cupomdesconto/ListCupomDesconto';

import FormProduto from './views/produto/FormProduto';
import FormCliente from './views/cliente/FormCliente';
import FormEntregador from './views/entregador/FormEntregador';
import FormCategoriaProduto from './views/categoriaproduto/FormCategoriaProduto';

//Prova
import FormMaterial from './views/material/FormMaterial';
import FormCupomDesconto from './views/cupomdesconto/FormCupomDesconto';

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
                <Route path="list-categoriaproduto" element={ <ListCategoriaProduto/> } />

                <Route path="form-cliente" element={ <FormCliente/> } />
                <Route path="form-material" element={ <FormMaterial/> } />
                <Route path="form-cupomDesconto" element={ <FormCupomDesconto/> } />
                <Route path="form-produto" element={ <FormProduto/> } />
                <Route path="form-entregador" element={ <FormEntregador/> } />
                <Route path="form-categoriaproduto" element={ <FormCategoriaProduto/> } />
            </Routes>
        </>
    )
}

export default Rotas