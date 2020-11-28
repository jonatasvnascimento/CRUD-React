// import './Main.css'
import React from 'react'
import Header from './Header'

export default props => 
    <React.Fragment>
        <Header {...props}/>
        <main className="content">
            <main className="content container-fluid">
                <div className="p-3 mt-3">
                    {props.children}
                </div>
                <hr/>
                <p className="mb-0">Sistema de gerenciamento desenvolvido em React</p>
            </main>
        </main>
    </React.Fragment>