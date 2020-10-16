import { useNavigation } from '@react-navigation/native';
import React, {useEffect, useState} from 'react'
import { Dimensions, StyleSheet, View, Text } from 'react-native'
import { Callout } from 'react-native-maps';

import Footer from '../components/Footer';
import Mapa from '../components/Mapa';
import Marcador from '../components/Marcador';


import defaultLocation from '../mock/DefaultLocation'
import OrphanageService from '../services/OrphanageService';


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    map: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height
    },
    calloutContrainer: {
        width: 200,
        height: 50,
        paddingHorizontal: 16,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255,255,255,0.8)"
    },

    calloutText: {
        color: "#0089A5",
        fontFamily: "Nunito_700Bold",
        fontSize: 14,
    }
});


export default () => {
    const orphanageService = new OrphanageService()
    const [orphanagesList, setOrphanagesList] =  useState([])



    useEffect(() => {
        const fetchData = async () => {
            const list = await orphanageService.getAll()
            setOrphanagesList(list)
        }

        fetchData()
    },[])



    const navigation = useNavigation()
    const handleNavigateToOrphanageDetails = () => {
        navigation.navigate("OrphanageDetails")
    }

    return (
        <View style={styles.container}>
            <Mapa region={defaultLocation}>
                <Marcador anchor={{x: 2.7, y: 0.0}}>
                    <Callout style={styles.calloutContrainer} tooltip onPress={handleNavigateToOrphanageDetails}>
                        <Text style={styles.calloutText}>Olá</Text>
                    </Callout>
                </Marcador>
            </Mapa>
            <Footer />
        </View>
    )
}