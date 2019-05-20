import React from 'react'
import {Image, TouchableWithoutFeedback, Text, StyleSheet} from 'react-native';
import {QuestionsImage} from '../../../assets'

class QuestionsIcon extends React.Component {
  render(){
    return ( 
       
      <TouchableWithoutFeedback onPress={this.props.onPress}>  
        <React.Fragment>   
          <Image
            style={{width: 20, height: 20}} 
            source={QuestionsImage}
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
export default  QuestionsIcon

const styles = StyleSheet.create({
  label: {
    marginBottom: -16,
    marginTop: -4,
    fontWeight: 'bold',
    color: '#0b7f7c',
    fontSize: 16
  }
})