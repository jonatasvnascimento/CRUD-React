import "./Logo.css"
import logo from '../../assets/imgs/logo.jpg'
import React from 'react'

export default props =>
    <aside className="logo">
        <a href="/" className="logo">
            {/* <img src={logo} alt="logo"/> */}
            <h1 className="one_name">Ghost<span className="two_name">Bit</span></h1>
        </a>
    </aside>