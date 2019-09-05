import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { MAIN_COLOR } from "../../Components/Constants";

export default class AskTitle extends React.PureComponent {
  render() {
    return (
      <View style={styles.titleContainer}>
        <Text style={styles.Ask}>ASK</Text>
        <Text style={styles.titleText}>
          {this.props.name ? this.props.name : "Any avaliable lawyer"}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 10,
    width: 200,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  Ask: {
    fontFamily: "Lato-Bold",
    fontSize: 18,
    color: MAIN_COLOR
  },
  titleText: {
    fontFamily: "Lato-Regular",
    fontSize: 12,
    color: "rgba(19, 19, 20, 0.8)"
  }
});
