import React from 'react'
import { Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { focusedQuestions, dimmedQuestions } from '../../../assets'

class QuestionsIcon extends React.Component {
  render() {
    var { focused } = this.props
    const labelStyle = (focused) => {
      return {
        fontFamily: "Lato-Bold",
        fontSize: 12,
        letterSpacing: 0,
        color: focused ? '#0b7f7c' : '#9b9b9b',
        textAlign: "center",
        marginTop: 1,
      }
    }
    return (
      <TouchableOpacity
        style={styles.button}
        activeOpacity={1}
        onPress={this.props.onPress}>
        <Image
          style={styles.icon}
          source={focused ? focusedQuestions : dimmedQuestions}
        />
        <Text style={labelStyle(focused)}>Questions</Text>
      </TouchableOpacity>

    );
  }
}
export default QuestionsIcon

const styles = StyleSheet.create({
  label: {
    marginBottom: -16,
    marginTop: -4,
    fontWeight: 'bold',
    color: '#0b7f7c',
    fontSize: 16
  },
  button: {
    //backgroundColor: 'red',
    width: 60,
    height: 68,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: -7,
  },
  icon: { 
    width: 32, 
    height: 32, 
    //marginTop: 10 
  }
})