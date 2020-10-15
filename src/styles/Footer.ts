import {StyleSheet} from 'react-native'


const styles =  StyleSheet.create({
    footer: {
        position: "absolute",
        left: 24,
        right: 24,
        bottom: 32,
        backgroundColor: "#FFF",
        borderRadius: 16,

        height: 56,
        paddingLeft: 24,
        flexDirection: 'row',

        elevation: 3,
        justifyContent: 'space-between',
        alignItems: "center"
    },
    footerText: {
        color: "#8fa7b3",
        fontSize: 16,
        fontFamily: "Nunito_700Bold"
    },
    createOrphanageButton: {
        width: 56,
        height: 56,
        backgroundColor: "#15c3d6",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default styles