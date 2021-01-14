import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { RestaurantsStack } from './RestaurantsStack'
import { FavsStack } from './FavsStack'
import { TopRestaurantsStack } from './TopRestaurantsStack'
import { SearchStack } from './SearchStack'
import { AccountStack } from './AccountStack'
import { Icon } from 'react-native-elements'

const Tabs = createBottomTabNavigator()

const ROUTES_NAMES = {
  RESTAURANTS: 'restaurants',
  FAVS: 'favs',
  TOP_RESTAURANTS: 'top-restaurants',
  SEARCH: 'search',
  ACCOUNT: 'account'
}

const ROUTES = {
  [ROUTES_NAMES.RESTAURANTS]: {
    name: 'restaurants',
    icon: 'pasta',
    title: 'Restaurantes',
    component: RestaurantsStack
  },
  [ROUTES_NAMES.FAVS]: {
    name: 'favs',
    icon: 'heart',
    title: 'Favoritos',
    component: FavsStack
  },
  [ROUTES_NAMES.TOP_RESTAURANTS]: {
    name: 'top-restaurants',
    icon: 'medal',
    title: 'Top',
    component: TopRestaurantsStack
  },
  [ROUTES_NAMES.SEARCH]: {
    name: 'search',
    icon: 'magnify',
    title: 'Buscar',
    component: SearchStack
  },
  [ROUTES_NAMES.ACCOUNT]: {
    name: 'account',
    icon: 'account',
    title: 'Mi Cuenta',
    component: AccountStack
  }
}

const tabIcon = (route, color) => {
  const { icon } = ROUTES[route]
  return <Icon type="material-community" name={icon} size={22} color={color} />
}

export const BottomNavigation = () => {
  const routes = Object.keys(ROUTES)

  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName={ROUTES_NAMES.RESTAURANTS}
        tabBarOptions={{
          inactiveTintColor: '#646464',
          activeTintColor: '#00A680'
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => tabIcon(route.name, color)
        })}
      >
        {routes.map((route) => {
          const { name, component, title } = ROUTES[route]

          return (
            <Tabs.Screen
              name={name}
              component={component}
              options={{
                title: title
              }}
            />
          )
        })}
      </Tabs.Navigator>
    </NavigationContainer>
  )
}
