import React from 'react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
import './DestinationLookup.scss'
import StaticDestination from '../StaticDestination/StaticDestination';
import {changeDestination} from '../../../../../redux/actions/bookingAction'
import {connect} from "react-redux"


class DestinationLookup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { address: '' };
    }

    handleChange = address => {
        this.setState({ address });
    };

    handleSelect = address => {
        this.setState({ address });
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => console.log(this.props.changePosition(latLng)))
            .catch(error => console.error('Error', error));
    };

    render() {
        return (
            <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <>
                        <div className="destination-input">
                            <label htmlFor="des-lookup">
                                <i className="fas fa-square-full"></i>

                            </label>
                            <input
                                {...getInputProps({
                                    placeholder: 'Search Places ...',
                                    className: 'location-search-input',
                                    id: "des-lookup"
                                })}
                            />
                            <div className="search-btn">
                                <i className="fas fa-search"></i>

                            </div>
                        </div>

                        <div className="autocomplete-dropdown-container des-lookup-list">
                            {this.state.address.length > 0 && loading && <div>Loading...</div>}
                            {this.state.address.length > 0 ?
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
                                : <StaticDestination />}
                        </div>


                        <div className="btn-group">
                            <button className="confirm-btn goback" onClick={()=>{this.props.changeToPickup()}}>Change pickup place</button>

                            {this.state.address.length > 0 ?
                                <button className="confirm-btn goahead" onClick={
                                    ()=>{this.props.changeToConfirm();
                                    this.props.changeDestination(this.state.address)}}>Confirm</button>
                                :""
                            }

                        </div>

                    </>
                )}
            </PlacesAutocomplete>
        );
    }
}


const mapDispatchToProps = dispatch =>({
    changeDestination:(address) =>{
        dispatch(changeDestination(address));
    }
})

export default connect(null,mapDispatchToProps)(DestinationLookup)