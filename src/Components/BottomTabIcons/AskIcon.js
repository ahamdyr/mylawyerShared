import React from 'react'
import {Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
import { plusCircleActive } from '../../../assets'

class AskIcon extends React.Component {
  render(){
    const labelStyle = () => {
      return {
        fontFamily: "Lato-Bold",
        fontSize: 12,
        letterSpacing: 0,
        color: '#0b7f7c',
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
          source={plusCircleActive}
        />
        <Text style={labelStyle()}>Ask</Text>
      </TouchableOpacity>     
    );
  }
}
export default  AskIcon

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
  icon: { width: 32, height: 32, marginTop: 10 }
})