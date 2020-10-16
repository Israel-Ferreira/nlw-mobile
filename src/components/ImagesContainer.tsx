import React from 'react'
import { View, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import ImagesContainerStyle from '../styles/ImagesContainer';

const ImagesContainer = () => (
    <View style={ImagesContainerStyle.imagesContainer}>
        <ScrollView horizontal pagingEnabled>
            <Image style={ImagesContainerStyle.image} source={{ uri: 'https://fmnova.com.br/images/noticias/safe_image.jpg' }} />
            <Image style={ImagesContainerStyle.image} source={{ uri: 'https://fmnova.com.br/images/noticias/safe_image.jpg' }} />
            <Image style={ImagesContainerStyle.image} source={{ uri: 'https://fmnova.com.br/images/noticias/safe_image.jpg' }} />
        </ScrollView>
    </View>
)

export default ImagesContainer

