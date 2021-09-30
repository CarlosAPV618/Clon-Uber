import React, {useContext} from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import dataContext from '../context/dataContext'
import tw from 'tailwind-react-native-classnames'

const Resultados = ({destino}) => {

    const {
        nav,
        places,
        setBusqueda,
        setPlaces,
        setOrigin,
        setDestination,
        setTravelTimeInformation
    } = useContext(dataContext)

    return (
        <FlatList
                style={tw`w-full ${places.length>0 && 'p-2'} shadow rounded-sm`}
                data={places}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <TouchableOpacity
                        onPress={() => {
                            if (destino){
                                setDestination({
                                    location: [...item.center.reverse()],
                                    description: item.place_name_es
                                })
                                nav.navigate('RideOptionsCard')
                            }else{
                                setOrigin({
                                    location: [...item.center.reverse()],
                                    description: item.place_name_es
                                })
                            }
                            setPlaces([])
                        }}
                    >
                        <View  style={[tw`border-gray-300 p-2`,{borderBottomWidth: .7}]}>
                            <Text style={tw`text-base`}>
                                {item.place_name_es}
                            </Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
    )
}

export default Resultados

const styles = StyleSheet.create({})
