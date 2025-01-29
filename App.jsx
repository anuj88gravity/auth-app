import { StyleSheet } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/screens/loginScreen/LoginScreen';
import { useSelector } from 'react-redux';
import { CounterScreen } from './src/screens/counterScreen/CounterScreen';

const Stack = createNativeStackNavigator();

function RootStack() {
  const { userData } = useSelector(state => state.auth);

  return (
    <Stack.Navigator>
      {userData ? (
        // Show CounterScreen if userData is available
        <Stack.Group>
          <Stack.Screen name="Counter" component={CounterScreen} />
        </Stack.Group>
      ) : (
        // Show LoginScreen if userData is not available
        <Stack.Group>
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
}


const App = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
