import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'

import dataContext from '../context/dataContext'

import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'

const data = [
        {
            id: 1,
            icon: 'home',
            location: 'Casa',
            destination: 'Calle V. Guerrero #3'
        },
        {
            id: 2,
            icon: 'briefcase',
            location: 'Trabajo',
            destination: 'Aeropuerto Internacional de Puebla'
        }
    ]

    const NavFavourites = () => {

        const {nav} = useContext(dataContext)

    return (
        <FlatList 
            style={tw`mt-2`}
            ItemSeparatorComponent={() => 
            <View style={[tw`bg-gray-200`, {height: .5}]}/>}
            data={data}        
            keyExtractor={item => item.id}
            renderItem={({item}) => (
                <TouchableOpacity 
                    style={tw`flex-row items-center py-5`}
                    // onPress={() => nav.navigate('')}
                >
                    <Icon 
                        style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                        name={item.icon}
                        type='ionicon'
                        color='white'
                        size={18}
                    />
                    <View>
                    <Text style={tw`text-lg`}>{item.location}</Text>
                    <Text style={tw`text-gray-500`}>{item.destination}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavFavourites

const styles = StyleSheet.create({})
