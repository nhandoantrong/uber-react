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
        },
        infoConfirm:{
            isActive : false,
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

    changeToInfoConfirm =() =>{
        this.setState({
            phoneVerification: {
                ...this.state.phoneVerification,
                isActive: false
            },
            infoConfirm:{
                ...this.state.infoConfirm,
                isActive: true,
            }
        })
    }


    render() {
        const {history} = this.props;
        return (
            <section className="register-page">

                <div className="content">
                    <PhoneRegister isActive={this.state.phoneRegister.isActive}
                        changeToVerification={this.changeToVerification}
                        setPhoneNumber={this.setPhoneNumber} />
                    <PhoneVerification isActive={this.state.phoneVerification.isActive}
                        changeToRegisteration={this.changeToRegisteration}
                        phoneNumber={this.state.phoneRegister.phoneNumber} 
                        changeToInfoConfirm={this.changeToInfoConfirm}
                        />
                        
                    <InfoConfirm history ={history}isActive = {this.state.infoConfirm.isActive}/>
                </div>

            </section>

        )
    }
}
