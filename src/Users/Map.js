import React from 'react';
import {withGoogleMap, GoogleMap, Marker} from "react-google-maps";

export const MyGoogleMapComponent = withGoogleMap(props => {
    return (
        <GoogleMap defaultZoom={2} defaultCenter={{lat: 2.128, lng: -4.826}}>
            {props.geolist.map((value, index) => {
                return (
                    <Marker key={index} position={{lat: parseInt(value.lat, 10), lng: parseInt(value.lng, 10)}}/>
                )})
            }
        </GoogleMap>
    )
});