import React, { Component } from 'react'
import Map from '../../conponents/GoogleMap/Map';


import { API_KEY } from "../../helpers/key"

import "./Booking.scss"
import PickUp from './BookingForms/PickUp/PickUp';
import { LAT, LNG } from "../../helpers/key"
import Destination from './BookingForms/Destination/Destination';
import Confirm from './Confirm/Confirm';
export default class Booking extends Component {

    state = {
        lat: LAT,
        lng: LNG,
        pickup: true,
        des: false,
        confirm: false
    }


    changeToPickup = () => {
        this.setState({
            pickup: true,
            des: false,
            confirm: false
        })
    }

    changeToDestination = () =>{
        this.setState({
            pickup: false,
            des: true,
            confirm: false
        })
    }

    changeToConfirm= () =>{
        this.setState({
            pickup: false,
            des: false,
            confirm: true,
        })
    }

    changePosition = ({ lat, lng }) => {
        this.setState({
            lat, lng
        })
    }

    render() {
        return (
            <div className="booking">
                {/* <div style={{height: "50px"}}></div> */}
                <Map
                    isMarkerShown={true}
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    lat={this.state.lat}
                    lng={this.state.lng}
                />
                <PickUp changePosition={this.changePosition} isActive={this.state.pickup} changeToDestination={this.changeToDestination}/>
                <Destination changePosition={this.changePosition} isActive={this.state.des} changeToPickup={this.changeToPickup} 
                    changeToConfirm={this.changeToConfirm}
                />
                <Confirm isActive = {this.state.confirm}/>
            </div>

        )
    }
}
