import React, { useContext, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { SafeAreaView, Text, View ,FlatList, Image } from 'react-native'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'
import dataContext from '../context/dataContext'

const data = [
    {
        id: 'Taxi-directo-1',
        title: 'Taxi estandar',
        multiplier: 1,
        img: process.env.REACT_APP_BASE_URL+'/3pn'
    },
    {
        id: 'Taxi-colectivo-1',
        title: 'Servicio colectivo',
        multiplier: .9,
        img: process.env.REACT_APP_BASE_URL+'/5w8'
    },
    {
        id: 'Taxi-vip-1',
        title: 'Taxi VIP',
        multiplier: 1.5,
        img: process.env.REACT_APP_BASE_URL+'/7pf'
    }
]

const RideOptionsCard = () => {

    const {nav} = useContext(dataContext)
    const [selected, setSelected] = useState(null)

    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <View style={tw`flex-row my-2`}>
                <TouchableOpacity 
                    onPress={() => nav.navigate('NavigateCard')}
                    style={tw`w-16 rounded-full h-16`}
                >
                    <Icon name='chevron-left' type='fontawesome' size={30}/>
                </TouchableOpacity>

                <Text style={tw`text-xl`}>Elige la opcion de tu preferencia</Text>
            </View>

        <FlatList 
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
                <TouchableOpacity 
                    style={
                        tw`flex-row items-center justify-between px-6 
                        ${item.id === selected?.id && 'bg-gray-200'}`
                    }
                    onPress={() => setSelected(item)}
                >
                    <Image 
                        style={{height: 100, width: 100, resizeMode: 'contain'}}
                        source={{uri: item.img}}
                    />
                    <View style={tw`flex-1 pl-8`}>
                        <Text style={tw`text-xl`}>{item.title}</Text>
                        <Text>Tiempo de llegada</Text>
                    </View>
                    <Text style={tw`text-xl`}>$$$</Text>
                </TouchableOpacity>
            )}
        />

        <View style={tw`h-24`}>
            <TouchableOpacity 
                disabled={!selected}
                style={tw`bg-black py-3 m-3 rounded-xl ${!selected && 'bg-gray-300'}`}
            >
                <Text style={tw`text-center text-white text-xl ${!selected && 'text-gray-200'}`}>
                    Elegir {selected?.title}
                </Text>
            </TouchableOpacity>
        </View>

        </SafeAreaView>
    )
}

export default RideOptionsCard

