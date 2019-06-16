import React from 'react';


import "./PickUpPlaceForm.scss"
import LocationSearchInput from './LocationSearchInput';
const PickUpPlaceForm = (props) => {


    return (
        <div className="pick-up-form">



            <LocationSearchInput
                changePosition={props.changePosition}
                changeToDestination={props.changeToDestination}
            />
            
        </div>
    );
}
export default PickUpPlaceForm