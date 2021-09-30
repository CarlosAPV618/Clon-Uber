import React, {useState, useEffect} from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'

import NavOptions from '../components/NavOptions'
import Buscador from '../components/Buscador'
import NavFavourites from '../components/NavFavourites'

const HomeScreen = () => {

    return (
        <SafeAreaView style={[tw`bg-white h-full`]}>
            <View style={tw`p-5`}>
                
                <Image 
                    style={{width: 100, height: 100, resizeMode: 'contain'}}
                    source={{uri: 'https://links.papareact.com/gzs'}}
                />

            <Buscador />
            
            <NavOptions />

            <NavFavourites />

            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    app: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    txt: {
        color: 'blue'
    }
})
