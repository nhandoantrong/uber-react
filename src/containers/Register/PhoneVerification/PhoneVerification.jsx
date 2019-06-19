import React from 'react'
import './PhoneVerification.scss'
import FormVerification from './FormVerification';

const PhoneVerification = (props) => {
    return (
        <div className={`phone-verification ${props.isActive ? "active" : ""}`}>
            <p className="verify-text">Enter the 4-digit code sent to you at {props.phoneNumber}.
                    <span className="reconfirm"
                    onClick={() => { props.changeToRegisteration() }}
                >Did you enter the correct number?</span>
            </p>
            <div className="input-group">
                <FormVerification changeToInfoConfirm={props.changeToInfoConfirm} />
            </div>


        </div>
    )

}

export default PhoneVerification
