import React, { Component } from 'react'
import './PhoneVerification.scss'
import FormVerification from './FormVerification';

export default class PhoneVerification extends Component {
    render() {
        return (
            <div className={`phone-verification ${this.props.isActive ? "active" : ""}`}>
                <p className="verify-text">Enter the 4-digit code sent to you at {this.props.phoneNumber}.
                    <span className="reconfirm"
                        onClick={()=>{this.props.changeToRegisteration()}}
                    >Did you enter the correct number?</span>
                </p>
                <div className="input-group">
                    <FormVerification changeToInfoConfirm={this.props.changeToInfoConfirm} />
                </div>

                
            </div>
        )
    }
}
