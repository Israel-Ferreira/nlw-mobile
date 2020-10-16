import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    imagesContainer: {
        height: 240,
    },

    image: {
        width: Dimensions.get('window').width,
        height: 240,
        resizeMode: 'cover',
    },
})