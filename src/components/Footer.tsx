import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

import styles from '../styles/Footer'
import FooterProps from '../prop-types/FooterProps'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'


const Footer = ({ footerText }: FooterProps) => {
    const navigation = useNavigation()

    const navigateToCreateOrphanage =  () => {
        navigation.navigate("SelectMapPosition")
    }


    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>{footerText}</Text>
            <RectButton style={styles.createOrphanageButton} onPress={navigateToCreateOrphanage}>
                <Feather name="plus" size={30} color="#FFF" />
            </RectButton>
        </View>
    )

}

Footer.defaultProps = {
    footerText: '2 Orfanatos Encontrados'
}

export default Footer