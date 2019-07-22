import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import ImageIcon from './ImageIcon'
import {reviewArrow} from '../../../assets'


export default class SubmitBtn extends React.PureComponent {
  render() {
    const { style, text, textStyle, onPress, reviewBtn } = this.props
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[{
          width: 230,
          height: 52,
          borderRadius: 22.5,
          backgroundColor: '#f5faf0',
          //elevation: 20,
          shadowColor: "#00000026",
          shadowOffset: {
            width: 8,
            height: 13.9
          },
          shadowRadius: 20,
          shadowOpacity: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }, style, reviewBtn ? {flexDirection: "row"} : {}]}
      >
        <Text style={[{
          fontFamily: 'Lato-Bold',
          fontSize: 16,
          color: '#0a0a09'
        }, textStyle]}>
          {text}
        </Text>
        {
          reviewBtn ?
            <ImageIcon 
              style={{
                width: 16,
                height: 16,
                marginLeft: 7
              }}
              source={reviewArrow}
            />
            : null
        }
      </TouchableOpacity>
    )
  }
}
