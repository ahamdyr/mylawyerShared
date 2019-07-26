import React from 'react'
import {Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
import { focusedHome, dimmedHome } from '../../../assets'

class HomeIcon extends React.Component {
  render(){
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
          source={ focused ? focusedHome : dimmedHome }
        />
        <Text style={labelStyle(focused)}>Home</Text>
      </TouchableOpacity>     
    );
  }
}
export default  HomeIcon

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
    alignItems: 'center',
  },
  icon: { width: 28, height: 28, marginTop: 10 }
})