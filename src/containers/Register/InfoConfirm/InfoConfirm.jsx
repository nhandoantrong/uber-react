import React from 'react';
import "./InfoConfirm.scss"
import InfoForm from './InfoForm';
const InfoConfirm = () => {
    return (
        <div className="info-confirm">
            <h2>Enter your info</h2>
            <InfoForm />
        </div>
    );
};

export default InfoConfirm;