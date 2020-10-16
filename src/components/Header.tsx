import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
    title: string;
    hasQuitButton?: boolean;
}


const Header = ({ title, hasQuitButton = true }: HeaderProps) => {
    const navigation = useNavigation()

    const handleQuit = () => {
        navigation.navigate("OrphanagesMap")
    }

    const RightContent = (hasQuitButton: boolean) => {
        if (hasQuitButton) {
            return (
                <BorderlessButton onPress={handleQuit} >
                    <Feather name="x" size={24} color="#ff869d" />
                </BorderlessButton>
            )
        }else{
            return (
                <View />
            )
        }
    }


    return (
        <View style={styles.container} >
            <BorderlessButton onPress={navigation.goBack}>
                <Feather name="arrow-left" size={24} color="#15b6d6" />
            </BorderlessButton>
            <Text style={styles.title}>{title}</Text>
            {RightContent(hasQuitButton)}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: "#F9FAFC",
        borderBottomWidth: 1,
        borderColor: "#dde3f0",

        paddingTop: 44,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    title: {
        justifyContent: "center",

        fontFamily: 'Nunito_600SemiBold',
        color: "#8fa7b3",
        fontSize: 16
    }
})


export default Header