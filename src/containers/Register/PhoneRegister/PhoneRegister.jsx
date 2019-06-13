import React, { Component } from 'react'
import PhoneRegisterForm from './PhoneRegisterForm';
import "./PhoneRegister.scss"

export default class PhoneRegister extends Component {

    render() {
        const {setPhoneNumber} = this.props;
        return (
            <div className={`register-form ${this.props.isActive ? "active": ""}`}>
                <h1>Get moving with Uber</h1>
                <PhoneRegisterForm setPhoneNumber={setPhoneNumber} />
            </div>
        )
    }
}
