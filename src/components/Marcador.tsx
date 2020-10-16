import React from 'react'
import { Marker} from 'react-native-maps';

import mapMarker from '../../assets/map-marker.png';
import MarcadorProps from '../prop-types/MarcadorProps';



const Marcador = ({ coordinates, children, anchor }: MarcadorProps) => {
    return (
        <Marker icon={mapMarker} coordinate={coordinates} calloutAnchor={anchor}>
            {children}
        </Marker>
    )
}

const defaultProps: MarcadorProps = {
    coordinates: {
        latitude: -23.1833585,
        longitude: -46.893274
    },


    anchor: {
        x: 0.0,
        y: 0.0
    }
}


Marcador.defaultProps = defaultProps

export default Marcador;