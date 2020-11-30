import "./Logo.css"
import logo from '../../assets/imgs/logo.jpg'
import React from 'react'

export default props =>
    <aside className="logo">
        <a href="/" className="logo">
            {/* <img src={logo} alt="logo"/> */}
        </a>
        <h1 className="one_name">Open<span className="two_name">XCOD</span></h1>
    </aside>