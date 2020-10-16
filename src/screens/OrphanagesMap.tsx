import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import Footer from '../components/Footer';
import Mapa from '../components/Mapa';
import Marcador from '../components/Marcador';


import defaultLocation from '../mock/DefaultLocation'


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    map: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height
    }
});


export default () => (
    <View style={styles.container}>
        <Mapa region={defaultLocation}>
            <Marcador />
        </Mapa>
        <Footer />
    </View>
)