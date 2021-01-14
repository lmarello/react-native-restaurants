import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Restaurants } from '../screens'

const Stack = createStackNavigator()

export const RestaurantsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="restaurants"
        component={Restaurants}
        options={{ title: 'Restaurantes' }}
      />
    </Stack.Navigator>
  )
}
