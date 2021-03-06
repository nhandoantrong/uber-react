import React from 'react';
import { connect } from "react-redux";

import './Confirm.scss';
const Confirm = props => {


    return (
        <div className={`confirm-booking ${props.isActive ? "active" : ""}`}>
            <div className="place">
                <i className="fas fa-map-marker-alt"></i>
                <div className="content">
                    <h3>From</h3>
                    <p>{props.booking.pickUpPlace}</p>
                </div>
            </div>
            <div className="place">
                <i className="fas fa-location-arrow"></i>
                <div className="content">
                    <h3>To</h3>
                    <p>{props.booking.destination}</p>
                </div>
            </div>
            <div className="fee">
                <div className="price">
                    <h4>Price: $9.76</h4>
                    <p>Kilometers: 3.85km</p>
                    <p>Time: 35 minutes</p>
                </div>
                <div className="fare-breakdown">
                    <h4>Fare breakdown <i className="fas fa-chevron-down"></i></h4>
                    
                </div>
            </div>


            <div className="btn-group">
                <div className="back">
                    <button className="confirm-btn goback" ><i className="fas fa-arrow-left"></i>
                        <span style={{ marginLeft: "8px" }}>Back</span></button>


                    <button className="confirm-btn goahead" 
                    onClick={()=>{
                        alert("booking successfully");
                        window.location.reload();
                    }}
                    >Confirm <i className="fas fa-arrow-right" style={{marginLeft:"auto"}}></i></button>
                </div>


            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    booking: state.booking
})
export default connect(mapStateToProps)(Confirm);