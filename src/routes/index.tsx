import React, { useEffect } from 'react'

import { Root } from 'native-base'

import SearchScreen from '../screens/Search'
import HistoryScreen from '../screens/History'
import LyricScreen from '../screens/LyricDetail'

import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'

import { LyricDetail } from '../types'
import AsyncStorage from '@react-native-community/async-storage'
import { useStore, Actions } from '../store'

/*
TODO: React-navigation has an issue which is prompting an error: 
currentlyFocusedField is deprecated and will be removed in a future release. Use currentlyFocusedInput.
The above error is supposed to be fixed in https://github.com/react-navigation/react-navigation/commit/35d6b9e3a4a28a59b3b11a67acbf7753d41705ae
but it seems to be persisting. Check on future updates.
*/ 

export type RootStackParamList = {
  Home: undefined
  Lyric: {song: LyricDetail}
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

  const {dispatch} = useStore()

  useEffect(() => {
    AsyncStorage.getItem('history').then(history => {
      console.log(JSON.parse(history))
      if(history)
      dispatch({type: Actions.InitHistory, payload: JSON.parse(history)})
    })
  }, [])

  return (
    //Needed for Toast component to work
    <Root>
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
    </Root>
  )
}

export default AppContainer
