import React, { Component } from "react";
import { View, Text, AppRegistry } from "react-native";

export class List extends Component {
  render() {
    return (
      <View>
        <Text>LIST</Text>
      </View>
    );
  }
}
export default List;
AppRegistry.registerComponent("List", () => List);
