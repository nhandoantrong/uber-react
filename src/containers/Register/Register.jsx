import React, { Component } from 'react'
import PhoneRegister from './PhoneRegister/PhoneRegister';
import PhoneVerification from './PhoneVerification/PhoneVerification';
import InfoConfirm from './InfoConfirm/InfoConfirm';

export default class Register extends Component {

    state = {
        phoneRegister: {
            isActive: true,
            phoneNumber: "",
        },
        phoneVerification: {
            isActive: false,
        }
    }

    changeToVerification = () => {
        this.setState({
            phoneRegister: {
                ...this.state.phoneRegister,
                isActive: false
            },
            phoneVerification: {
                ...this.state.phoneVerification,
                isActive: true
            },
        })
    }

    setPhoneNumber = (number) => {
        this.setState({
            phoneRegister: {
                ...this.state.phoneRegister,
                phoneNumber: number
            },
        }, () => {
            this.changeToVerification();
        })
    }

    changeToRegisteration = () => {
        this.setState({
            phoneRegister: {
                ...this.state.phoneRegister,
                isActive: true
            },
            phoneVerification: {
                ...this.state.phoneVerification,
                isActive: false
            },
        })
    }

    render() {
        return (
            <section className="register-page">

                <div className="content">
                    {/* <PhoneRegister isActive={this.state.phoneRegister.isActive}
                        changeToVerification={this.changeToVerification}
                        setPhoneNumber={this.setPhoneNumber} />
                    <PhoneVerification isActive={this.state.phoneVerification.isActive}
                        changeToRegisteration={this.changeToRegisteration}
                        phoneNumber={this.state.phoneRegister.phoneNumber} /> */}
                    <InfoConfirm />
                </div>

            </section>

        )
    }
}
