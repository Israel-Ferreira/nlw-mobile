import React from 'react';

import { useFonts } from 'expo-font'

import {
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold
} from '@expo-google-fonts/nunito'



import { AppLoading } from 'expo';
import Routes from './src/Routes';



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
            <Routes />
        )
    }

}

