import React, { Components } from 'react'
import Main from '../template/Main'

const headerProps = {
    icon: 'users',
    title: 'Usúario',
    subtitle: 'Cadastro de usúario: Incluir, Listar, Alterar e Excluir'
}

export default class UserCrud extends Components {
    constructor() {
        const headerProps = {
            icon: 'users',
            title: 'Usúario',
            subtitle: 'Cadastro de usúario: Incluir, Listar, Alterar e Excluir'
        }
    }
    render() {
        return (
            <Main {...headerProps}>
                Cadastro de Usuario
            </Main>
        )
    }
}