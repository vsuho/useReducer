import { useReducer } from 'react';
import { Button, FlatList, StyleSheet, TextInput, TouchableOpacity, View, Text } from 'react-native';

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_TASK':
      return { ...state, text: action.text };
    case 'ADD_TASK':
      if (state.text.trim() === '') return state; 
      return {
        ...state,
        todos: [...state.todos, { id: state.todos.length +1 , text: state.text }],
        text: '',
      };
    case 'REMOVE_TASK':
      return { ...state, todos: state.todos.filter(task => task.id !== action.id) };
    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, { text: '', todos: [] });

  return (
    <View style={styles.container}>
    
      <TextInput
        style={styles.input}
        value={state.text}
        onChangeText={(text) => dispatch({ type: 'SET_TASK', text })}
        placeholder="Add task..."
      />
      <Button title="Save" onPress={() => dispatch({ type: 'ADD_TASK' })} />

      <FlatList
        data={state.todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => dispatch({ type: 'REMOVE_TASK',id: item.id })}>
            <Text style={styles.task}>{item.text}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '60%',
    marginBottom: 10,
  },
  task: {
    padding: 5,
    textAlign: 'center',
  },
});
