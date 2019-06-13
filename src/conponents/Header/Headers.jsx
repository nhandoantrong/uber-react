import React, { Component } from 'react'

export default class Headers extends Component {
    render() {
        return (
            <header className="header">
                <div className="logo">
                    <img src="./img/logo_img.png" alt="uber-logo" />
                    <img src="./img/logo_text.png" alt="uber-logo" />
                </div>
                <div className="collapse">
                    <i className="fas fa-bars" />
                </div>
            </header>
        )
    }
}
