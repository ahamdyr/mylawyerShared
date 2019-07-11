import React from 'react'
import {Image, TouchableWithoutFeedback, Text, StyleSheet} from 'react-native';
import { MenuImage } from '../../../assets'

class SettingsIcon extends React.Component {
  render(){
    return ( 
       
      <TouchableWithoutFeedback onPress={this.props.onPress}>  
        <React.Fragment>   
          <Image
            style={{width: 20, height: 20}} 
            source={MenuImage}
          />
          {
            this.props.focused ?
              <Text style={styles.label}>
                ___________
              </Text>
              : null
          }
        </React.Fragment>             
      </TouchableWithoutFeedback>  
      
    );
  }
}
export default  SettingsIcon

const styles = StyleSheet.create({
  label: {
    marginBottom: -16,
    marginTop: -4,
    fontWeight: 'bold',
    color: '#0b7f7c',
    fontSize: 16
  }
})