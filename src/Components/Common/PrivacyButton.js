import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Picker
} from 'react-native'
import { downArrow } from '../../../assets'

export default class PrivacyButton extends React.PureComponent {
  render() {
    const { style, text, textStyle, onPress } = this.props
    return (
      <Picker
        //selectedValue={this.state.language}
        style={{ height: 50, width: 100 }}
        onValueChange={(itemValue, itemIndex) =>
          this.setState({ language: itemValue })
        }
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    )
  }
}

const styles = StyleSheet.create({})
