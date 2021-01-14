import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { TopRestaurants } from '../screens'

const Stack = createStackNavigator()

export const TopRestaurantsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="top-restaurants"
        component={TopRestaurants}
        options={{ title: 'Top' }}
      />
    </Stack.Navigator>
  )
}
