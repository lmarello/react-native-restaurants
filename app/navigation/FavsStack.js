import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Favs } from '../screens'

const Stack = createStackNavigator()

export const FavsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="favs"
        component={Favs}
        options={{ title: 'Favoritos' }}
      />
    </Stack.Navigator>
  )
}
