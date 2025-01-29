import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../redux/features/counter/counterSlice';
import { logout } from '../../redux/features/auth/authSlice'; // Import the logout action
import { Button, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export function CounterScreen() {
  const count = useSelector(state => state.counter.Value); // Extract value safely
  const userData = useSelector(state => state.auth.userData); // Get user data to display
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout()); // Dispatch logout action
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter</Text>
      {userData && <Text style={styles.user}>Hello, {userData.username}</Text>} 
      <Text style={styles.count}>Count: {count}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(increment())}
        >
          <Text style={styles.buttonText}>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(decrement())}
        >
          <Text style={styles.buttonText}>Decrement</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={handleLogout}
      >
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  count: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 30,
    color: '#555',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    margin: 10,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  logoutButton: {
    backgroundColor: '#f44336',
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  user: {
    fontSize: 18,
    marginBottom: 20,
    color: '#333',
  },
});
