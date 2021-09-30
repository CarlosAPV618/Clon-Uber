import React, { useContext } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { Searchbar } from 'react-native-paper'
// import openMap from 'react-native-open-maps';
import Resultados from './Resultados';
import dataContext from '../context/dataContext';
import NavFavourites from './NavFavourites';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const NavigateCard = () => {

    const {
        nav,
        setBusqueda
    } = useContext(dataContext)

    return (
        <SafeAreaView style={tw`flex-1 bg-white`}>
            <Text style={tw`text-center py-5 text-xl`}>Buen dia, Carlos</Text>
            <View style={tw`px-5`}>
                <Searchbar 
                    placeholder='Elige tu lugar de destino'
                    onChangeText={txt => setBusqueda(txt)}
                    // value={busqueda}
                />
                <Resultados destino={true}/>

                <NavFavourites />
            </View>

            <View style={tw`flex-row py-3 mt-auto justify-evenly border-t border-gray-100`}>
                <TouchableOpacity 
                    style={tw`flex-row justify-evenly bg-black w-24 px-4 py-3 rounded-full`}
                    onPress={() => nav.navigate('RideOptionsCard')}
                >
                    <Icon name='car' type='font-awesome' color='white' size={16}/>
                    <Text style={tw`text-white text-center`}>Rides</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={tw`flex-row bg-gray-200 justify-evenly w-24 px-4 py-3 rounded-full`}
                >
                    <Icon name='fast-food-outline' type='ionicon' color='black' size={16}/>
                    <Text style={tw`text-center`}>Eats</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default NavigateCard

const styles = StyleSheet.create({})
