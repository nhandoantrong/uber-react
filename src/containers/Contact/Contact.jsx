import React from 'react';
import "./Contact.scss"
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <div className="contact">
            <div className="content">
                <h1>Contact us</h1>
                <ContactForm />
            </div>
        </div>
    );
};

export default Contact;