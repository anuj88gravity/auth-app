import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../redux/features/counter/counterSlice';
import { Button, View, Text, StyleSheet } from 'react-native';

export function CounterScreen() {
  const count = useSelector(state => state.counter.Value); // Extract value safely
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter</Text>
      <Text style={styles.count}>Count: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Increment"
          onPress={() => dispatch(increment())}
         
        />
        <Button
          title="Decrement"
          onPress={() => dispatch(decrement())}
         
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
