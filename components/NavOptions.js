import React, { useContext } from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import { useNavigation } from '@react-navigation/native'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
import dataContext from '../context/dataContext'

const data = [
    {
        id: 1,
        title: 'Pide un taxi',
        img: process.env.REACT_APP_BASE_URL+'/3pn',
        screen: 'MapScreen'
    },
    {
        id: 2,
        title: 'Ordena comida',
        img: process.env.REACT_APP_BASE_URL+'/28w',
        screen: 'EatsScreen'
    }
]

const NavOptions = () => {

    const {nav} = useContext(dataContext)

    return (
        <FlatList
            style={tw`mt-2`}
            data={data}
            horizontal
            keyExtractor={item => item.id}
            renderItem={({item}) => (
                <TouchableOpacity
                    style={[tw`p-2 pt-4 bg-gray-200 mr-4 rounded mt-2 w-40`]}
                    onPress={() => nav.navigate(item.screen)}
                >
                    <View>

                        <Image
                            style={{width: 120, height: 120, resizeMode: 'contain', marginLeft: 15}}
                            source={{uri: item.img}}
                        />
                        <Text style={tw`mt-2 text-lg text-center mb-4`}> {item.title} </Text>
                        <Icon
                            style={tw`p-2 bg-black rounded-full w-10`} 
                            name='arrowright' 
                            color='white' 
                            type='antdesign'
                        /> 

                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavOptions

const styles = StyleSheet.create({})
