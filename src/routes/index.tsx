import React from 'react'

import SearchScreen from '../screens/Search'
import HistoryScreen from '../screens/History'
import LyricScreen from '../screens/LyricDetail'

import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'

export type RootStackParamList = {
  Home: undefined
  Lyric: undefined
}

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator<RootStackParamList>()

const BottomTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Search" component={SearchScreen} />
    <Tab.Screen name="History" component={HistoryScreen} />
  </Tab.Navigator>
)

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={BottomTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Lyric"
          component={LyricScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
