import 'react-native-gesture-handler'
import React from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'

import DataState from './context/dataState'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './screens/HomeScreen'
import MapScreen from './screens/MapScreen'
import tw from 'tailwind-react-native-classnames'
// import EatsScreen from './screens/EatsScreen'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <DataState>
        <SafeAreaProvider>
         <KeyboardAvoidingView 
          style={tw`flex-1`}
          // behavior={Platform.OS === 'android' ? 'height' : 'padding'}
          // keyboardVerticalOffset={Platform.OS === 'android' ? 0 : -64}
         >
            <Stack.Navigator 
              screenOptions={{
                headerTitleAlign: 'center',
                headerTintColor: 'white',
                headerStyle: {backgroundColor: 'black'},
                headerShown: false
              }}
            >
              <Stack.Screen 
                name='HomeScreen' 
                component={HomeScreen}
              />
              <Stack.Screen name='MapScreen' component={MapScreen}/>
              {/* <Stack.Screen name='Eats' component={EatsScreen}/> */}
            </Stack.Navigator>
         </KeyboardAvoidingView>
        </SafeAreaProvider>
      </DataState>
    </NavigationContainer>
  )
}

export default App
