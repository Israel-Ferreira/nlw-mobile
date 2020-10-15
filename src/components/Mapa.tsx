import React from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import MapaProps from '../prop-types/MapaProps'


import styles from '../styles/Mapa';


const Mapa = (props: MapaProps) => (
    <MapView style={styles.map} initialRegion={props.region} provider={PROVIDER_GOOGLE} >
        {props.children}
    </MapView>
)



export default Mapa