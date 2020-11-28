import './Nav.css'
import React from 'react'
import Nav_item from './Nav_item'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <Nav_item title="Início" icon="home" />
            <Nav_item title="Usuários" icon="user" />
            <Nav_item title="Cadastro" icon="database" />
            <Nav_item title="Receita" icon="file" />
            <Nav_item title="Conta" icon="user-circle" />
            <Nav_item title="Sair" icon="internet-explorer" />
        </nav>
    </aside>
