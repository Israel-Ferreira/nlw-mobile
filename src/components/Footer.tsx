import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import {Feather} from '@expo/vector-icons'

import styles from '../styles/Footer'
import FooterProps from '../prop-types/FooterProps'


const Footer =  ({footerText} : FooterProps) => (
    <View style={styles.footer}>
        <Text style={styles.footerText}>{footerText}</Text>
        <TouchableOpacity style={styles.createOrphanageButton}>
            <Feather name="plus" size={30} color="#FFF"/>
        </TouchableOpacity>
    </View>
)


Footer.defaultProps =  {
    footerText: '2 Orfanatos Encontrados'
}

export default Footer