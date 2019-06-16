import React from 'react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';

import {changePickUpPlace} from "../../../../../redux/actions/bookingAction"
import {connect} from "react-redux"

class LocationSearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: '',
            suggestion: [{
                primary: "Bdlive24.com",
                secondary: "House57, road-8, Block-D, niketon, Gulshan"
            },
            {
                primary: "Daffodil internationalUnerversity",
                secondary: "Mirpur Rd, Dhanmondi 32 Bustop"
            },
            {
                primary: "Bdlive24.com",
                secondary: "House57, road-8, Block-D, niketon, Gulshan"
            },
            {
                primary: "Daffodil internationalUnerversity",
                secondary: "Mirpur Rd, Dhanmondi 32 Bustop"
            },
            {
                primary: "Bdlive24.com",
                secondary: "House57, road-8, Block-D, niketon, Gulshan"
            },
            ]
        };
    }

    handleChange = address => {
        this.setState({ address });
    };

    handleSelect = address => {
        this.setState({
            address
        })
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => {this.props.changePosition(latLng)})
            .catch(error => console.error('Error', error));
    };

    suggestionChoose = (address) => {
        this.setState({
            address
        })
    }

    handlePickUpConfirm = () =>{
        this.props.changePickUpPlace(this.state.address)
        this.props.changeToDestination()
    }

    render() {
        return (
            <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
            >
                {(props) => {


                    const { getInputProps, suggestions, getSuggestionItemProps, loading } = props;

                    const renderSuggestion = this.state.suggestion.map((item, index) => (
                        <div className="suggestion" key={index} onClick={() => { this.suggestionChoose(item.secondary) }}>
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="place-group">
                                <h6>{item.primary}</h6>
                                <p>{item.secondary}</p>
                            </div>
                        </div>
                    ))
                    return (
                        <>
                            <div className="input-container">
                                <label htmlFor="pickup"><i className="fas fa-square-full"></i></label>
                                <input
                                    {...getInputProps({
                                        placeholder: 'Where to ?',
                                        id: "pickup"
                                    })}
                                />
                                <button><i className="fas fa-search"></i></button>
                            </div>
                            <div className="autocomplete-dropdown-container">
                                {loading &&this.state.address.length>0 && <div>Loading...</div>}
                                {
                                    this.state.address.length > 0 ?
                                        suggestions.map(suggestion => {
                                            return (
                                                <div className="suggestion" {...getSuggestionItemProps(suggestion)}>
                                                    <i className="fas fa-map-marker-alt"></i>
                                                    <div className="place-group">
                                                        <h6>{suggestion.formattedSuggestion.mainText}</h6>
                                                        <p>{suggestion.formattedSuggestion.secondaryText}</p>
                                                    </div>
                                                </div>
                                            );
                                        })
                                        : renderSuggestion
                                }
                            </div>
                            {this.state.address.length>0? 
                            <div className="choose-pickup-place-confirm">
                                <button className="confirm-btn" onClick={this.handlePickUpConfirm}>Choose this Address</button>
                            </div> : ""}
                            
                        </>
                    )
                }}
            </PlacesAutocomplete>
        );
    }
}


const mapDispatchToProps = dispatch =>({
    changePickUpPlace: (address) =>{
        dispatch(changePickUpPlace(address))
    }
})

export default connect(null, mapDispatchToProps)(LocationSearchInput)