import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Account } from '../screens'

const Stack = createStackNavigator()

export const AccountStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="account"
        component={Account}
        options={{ title: 'Mi cuenta' }}
      />
    </Stack.Navigator>
  )
}
