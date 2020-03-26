import React from 'react';
import Item from './Item';

function ListaDeCompras() {
    return (
        <div>
            <h2>Lista de Compras</h2>
            <ul>
                <Item nome="Arroz" />
                <Item nome="Feijão" />
                <Item nome="Açúcar" />
                <Item nome="Batata" />
                <Item nome="Leite" />
            </ul>
        </div>
    );
}

export default ListaDeCompras;
