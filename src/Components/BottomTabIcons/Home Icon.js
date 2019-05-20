import React from 'react'
import {Image, TouchableWithoutFeedback, Text, StyleSheet} from 'react-native';
import {HomeImage} from '../../../assets'

class HomeIcon extends React.Component {
  render(){
    return (      
      <TouchableWithoutFeedback onPress={this.props.onPress}>     
        <React.Fragment>
        <Image
          style={{width: 19.5, height: 20.5}} 
          source={HomeImage}
        />
        {
          this.props.focused?
          <Text style={styles.label}>
            ___________
          </Text>
          :null
        }        
        </React.Fragment>
      </TouchableWithoutFeedback>     
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
  }
})