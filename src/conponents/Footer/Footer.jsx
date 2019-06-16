import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
                <footer className="footer">
                <div className="legal">
                    <p><i className="far fa-copyright" /> 2019 Uber Technololy Inc. <span>All Rights Reserved</span> </p>
                    <div className="terms">
                        <span>Terms of Use</span>
                        <span>Legal Notices</span>
                        <span>Privacy &amp; Security</span>
                    </div>
                </div>
                <div className="social-network">
                    <img src="./img/Facebook_logo.svg" alt="social-network" />
                    <img src="./img/linkedin.png" alt="linkedin" />
                    <img src="./img/youtube.svg" alt="social-network" />
                </div>
            </footer>
        )
    }
}
