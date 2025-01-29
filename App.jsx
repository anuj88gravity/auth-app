import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CounterScreen } from './src/screens/counterScreen/CounterScreen'
import LoginScreen from './src/screens/loginScreen/LoginScreen'

const App = () => {
  return (
    <View>
      {/* <CounterScreen/> */}
      <LoginScreen/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})