import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { WIDTH } from "../../Components/Constants";

export default class QuestionBody extends React.PureComponent {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <Text style={styles.text}>{this.props.body}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 21,
    borderBottomWidth: 0.5,
    borderBottomColor: '#d5d5e0',
    marginTop: 10,
    width: WIDTH,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontFamily: "Lato-Bold",
    fontSize: 16,
    color: "#454546",
    textAlign: "center"
  }
});
