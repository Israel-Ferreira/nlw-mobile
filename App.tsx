import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';


import { useFonts } from 'expo-font'

import {
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold
} from '@expo-google-fonts/nunito'



import Footer from './src/components/Footer';
import Mapa from './src/components/Mapa';
import Marcador from './src/components/Marcador';

import defaultLocation from './src/mock/DefaultLocation';
import { AppLoading } from 'expo';



export default function App() {
    let [fontsLoaded] = useFonts({
        Nunito_600SemiBold,
        Nunito_700Bold,
        Nunito_800ExtraBold
    });


    if (!fontsLoaded) {
        return <AppLoading />
    } else {
        return (
            <View style={styles.container}>
                <Mapa region={defaultLocation}>
                    <Marcador />
                </Mapa>
                <Footer />
            </View>
        );

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    map: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height
    }
});
