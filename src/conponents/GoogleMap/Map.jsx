import React from "react"
import { GoogleMap, Marker , withGoogleMap, withScriptjs } from "react-google-maps";

const Map = (props) =>
{
  
  const {lat,lng} = props

  return(
  <GoogleMap
    defaultZoom={16}
    center={{ lat, lng}}
  >
    {props.isMarkerShown && <Marker position={{ lat, lng }} />}
  </GoogleMap>)}


export default withScriptjs(withGoogleMap(Map));