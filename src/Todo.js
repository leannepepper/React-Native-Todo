import React from "react";
import { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
  TextInput,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: ""
    };
  }

  handleChange(text) {
    this.setState({
      newTodo: text
    });
  }

  handlePress() {
    fetch("http://localhost:3000/todos", {
      method: "post",
      body: JSON.stringify({
        name: this.state.newTodo
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        const todos = [...this.state.todos, data];
        this.setState({ todos, newTodo: "" });
      });
  }

  handleDelete = index => {
    this.setState({
      todos: [
        ...this.state.todos.slice(0, index),
        ...this.state.todos.slice(index + 1)
      ]
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            value={this.state.newTodo}
            onChangeText={this.handleChange.bind(this)}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={this.handlePress.bind(this)}
          >
            <Text style={styles.buttonText}>Add Item</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.todoList}>
          {this.state.todos.map((todo, i) => (
            <View key={i} style={styles.todo}>
              <Text style={styles.todoText}>{todo.name}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
}
export default Todo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  input: {
    borderBottomWidth: 4,
    borderBottomColor: "blue",
    flex: 0.7,
    fontSize: 24
  },
  form: {
    flexDirection: "row"
  },
  button: {
    flex: 0.3,
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
    height: 50
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold"
  },
  todoList: {
    marginTop: 60
  },
  todo: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey"
  },
  todoText: {
    fontSize: 24
  }
});
AppRegistry.registerComponent("Todo", () => Todo);
