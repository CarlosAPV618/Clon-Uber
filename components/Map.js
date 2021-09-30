import React, {useContext} from 'react'
import dataContext from '../context/dataContext'
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native'

import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'

import openMap from 'react-native-open-maps';

const Map = () => {

    const {
        origin,
        destination
    } = useContext(dataContext)


    const viewMap = () => {
        openMap({ 
            start: origin.description,
            end: destination.description
        });
    }

    return (
        <View
            style={[tw`w-full`, {flex: 1, justifyContent: 'center', alignItems: 'center'}]}
        >
            <TouchableOpacity 
                style={[tw`bg-gray-200 rounded h-1/2 w-1/4 justify-center`]}
                onPress={viewMap}
            >
                <Icon
                    name='map-pin' 
                    color='black' 
                    type='feather'
                    size={40}
                />
                <Text style={{textAlign: 'center', fontSize: 15, marginTop: 4}}>Ver recorrido</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Map

const styles = StyleSheet.create({})
