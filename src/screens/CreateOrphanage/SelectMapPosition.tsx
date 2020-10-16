import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import defaultLocation from '../../mock/DefaultLocation';
import Mapa from '../../components/Mapa';
import Marcador from '../../components/Marcador';

export default function SelectMapPosition() {
    const navigation = useNavigation();

    function handleNextStep() {
        navigation.navigate('OrphanageData');
    }

    return (
        <View style={styles.container}>
            <Mapa region={defaultLocation}>
                <Marcador />
            </Mapa>
            <RectButton style={styles.nextButton} onPress={handleNextStep}>
                <Text style={styles.nextButtonText}>Próximo</Text>
            </RectButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },
    nextButton: {
        backgroundColor: '#15c3d6',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,

        position: 'absolute',
        left: 24,
        right: 24,
        bottom: 40,
    },

    nextButtonText: {
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: 16,
        color: '#FFF',
    }
})