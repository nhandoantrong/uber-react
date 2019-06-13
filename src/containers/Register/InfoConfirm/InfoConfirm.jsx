import React from 'react';
import "./InfoConfirm.scss"
import InfoForm from './InfoForm';
const InfoConfirm = props => {
    return (
        <div className={`info-confirm ${props.isActive ? "active ": ""}`}>
            <h2>Enter your info</h2>
            <InfoForm history={props.history}/>
        </div>
    );
};

export default InfoConfirm;