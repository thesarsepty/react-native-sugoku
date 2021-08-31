import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screen/HomeScreen'
import GameScreen from '../screen/GameScreen'
import FinishScreen from '../screen/FinishScreen'
export default function StackScreen() {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator 
    initialRouteName="Home"
    screenOptions={{
      headerShown: false
    }}
    >
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="Game" component={GameScreen}/>
      <Stack.Screen name="Finish" component={FinishScreen}/>
    </Stack.Navigator>
  )
}
