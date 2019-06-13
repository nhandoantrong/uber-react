import React from 'react';
import "./PhoneRegister.scss"
import PhoneRegisterForm from "./PhoneRegisterForm"

const PhoneRegister = props => {
    const { setPhoneNumber } = props;
    return (
        <div className={`register-form ${props.isActive ? "active" : ""}`}>
            <h1>Get moving with Uber</h1>
            <PhoneRegisterForm setPhoneNumber={setPhoneNumber} />
        </div>
    )
};

export default PhoneRegister;