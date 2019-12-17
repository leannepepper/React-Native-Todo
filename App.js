import React from "react";
import { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
  TextInput,
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

  handleChange(e) {
    const { value } = e.target;
    this.setState({ newTodo: value });
  }
  handlePress() {
    this.setState({
      todos: [...this.state.todos, this.state.newTodo],
      newTodo: ""
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.newTodo}
          onChange={this.handleChange.bind(this)}
        />
        <TouchableHighlight onPress={this.handlePress.bind(this)}>
          <Text>Add Item</Text>
        </TouchableHighlight>
        {this.state.todos.map((todo, i) => (
          <Text key={i}>{todo}</Text>
        ))}
      </View>
    );
  }
}
export default Todo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
AppRegistry.registerComponent("Todo", () => Todo);
