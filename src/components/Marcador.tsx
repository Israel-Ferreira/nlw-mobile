import React from 'react'
import { Text } from 'react-native';
import { Marker, Callout} from 'react-native-maps';

import styles from '../styles/Marcador'
import mapMarker from '../../assets/map-marker.png';
import MarcadorProps from '../prop-types/MarcadorProps';
import { useNavigation } from '@react-navigation/native';


const Marcador = ({ coordinates, calloutText }: MarcadorProps) => {
    const navigation  = useNavigation()
    const handleNavigateToOrphanageDetails =  () => {
        navigation.navigate("OrphanageDetails")
    }


    return (
        <Marker icon={mapMarker} coordinate={coordinates} calloutAnchor={{ x: 2.7, y: 0.0 }}>
            <Callout style={styles.calloutContrainer} tooltip onPress={handleNavigateToOrphanageDetails}>
                <Text style={styles.calloutText}>{calloutText}</Text>
            </Callout>
        </Marker>
    )
}

const defaultProps: MarcadorProps = {
    coordinates: {
        latitude: -23.1833585,
        longitude: -46.893274
    },
    calloutText: "Orfanato Raio de Luz"
}


Marcador.defaultProps = defaultProps

export default Marcador;