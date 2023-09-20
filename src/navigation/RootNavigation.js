import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Products from '../screens/Products'
import ProductDetail from '../screens/ProductDetail'
import Home from '../screens/Home'

const Stack = createNativeStackNavigator()

const RootNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='home' screenOptions={{
        headerShown: false,
    }}>
      <Stack.Screen component={Home} name='home'/>
      <Stack.Screen component={Products} name='products'/>
      <Stack.Screen component={ProductDetail} name='productDetail'/>
    </Stack.Navigator>
  )
}

export default RootNavigation