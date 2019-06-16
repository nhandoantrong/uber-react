import React from 'react';
import PickUpPlaceForm from './PickupPlaceForm/PickUpPlaceForm';

import "./PickUp.scss"

const PickUp = (props) => {
    return (
        <div className={`pickup ${props.isActive? "active": ""}`}>
            <PickUpPlaceForm changePosition={props.changePosition} changeToDestination={props.changeToDestination}/>
        </div>
    );
};

export default PickUp;