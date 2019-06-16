import React from 'react';
import './Destination.scss'
import DestinationLookup from './DestinationLookup/DestinationLookup';


const Destination = props => {
    return (
        <div className={`destination ${props.isActive? "active " : ""}`}>
            <DestinationLookup changePosition={props.changePosition} changeToPickup={props.changeToPickup}
            changeToConfirm={props.changeToConfirm}
            />
        </div>
    );
};

export default Destination;