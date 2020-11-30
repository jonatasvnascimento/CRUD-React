import './Nav.css'
import React from 'react'
import Nav_item from './Nav_item'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <Nav_item title="Início" icon="home" link="/"/>
            <Nav_item title="Usuários" icon="user" link="users"/>
            <Nav_item title="Cadastro" icon="database" link="register"/>
            <Nav_item title="Receita" icon="file" link="recipe"/>
            <Nav_item title="Conta" icon="user-circle" link="account"/>
            <Nav_item title="Sair" icon="internet-explorer" link="exit"/>
        </nav>
    </aside>
