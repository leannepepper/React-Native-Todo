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
import { render } from "react-dom";

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
    this.setState({
      todos: [
        ...this.state.todos,
        {
          name: this.state.newTodo
        }
      ],
      newTodo: ""
    });
  }
  handleDelete(i) {
    this.setState({
      todos: [...this.state.todos.slice(0, i), ...this.state.todos.slice(i + 1)]
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{
            minWidth: "80%",
            maxWidth: 300,
            minHeight: "7%",
            maxHeight: 150,
            backgroundColor: "#fff"
          }}
          value={this.state.newTodo}
          onChangeText={this.handleChange.bind(this)}
        />
        <TouchableHighlight onPress={this.handlePress.bind(this)}>
          <Text>Add Item</Text>
        </TouchableHighlight>
        <View>
          {this.state.todos.map((todo, i) => (
            <Text key={i}>
              {todo.name}
              <TouchableHighlight onPress={this.handleDelete.bind(this)}>
                <Text>Delete Item</Text>
              </TouchableHighlight>
            </Text>
          ))}
        </View>
      </View>
    );
  }
}
export default Todo;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    borderStyle: "solid"
  },
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center"
  }
});
AppRegistry.registerComponent("Todo", () => Todo);
