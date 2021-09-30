import React, {useContext} from 'react'
import { StyleSheet, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import dataContext from '../context/dataContext'

import tw from 'tailwind-react-native-classnames'

import Map from '../components/Map'
import NavigateCard from '../components/NavigateCard'
import RideOptionsCard from '../components/RideOptionsCard'

const Stack = createStackNavigator()

const MapScreen = () => {

    const {
        origin
    } = useContext(dataContext)



    return (
        <View style={tw`bg-white`}>

            <View style={tw`h-1/4`}>
                <Map />
            </View>

            <View style={tw`h-3/4`}>
                <Stack.Navigator
                    initialRouteName='NavigateCard'
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stack.Screen 
                        name='NavigateCard'
                        component={NavigateCard}
                    />
                    <Stack.Screen 
                        name='RideOptionsCard'
                        component={RideOptionsCard}
                    />
                </Stack.Navigator>
            </View>

        </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({})
