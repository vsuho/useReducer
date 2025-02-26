import React from 'react';
import { useReducer } from 'react';
import { Button, TextInput, View, StyleSheet } from 'react-native';

export default function Add ({ text, setText, addTask })  {
  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Add a task..."
      />
      
      <Button style={styles.button} title="Save" onPress={() => dispatch({ type: 'ADD_TASK', index })} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  button: {
    flex: 1,
    padding: 50
  },
});

