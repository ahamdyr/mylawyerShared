import React from 'react'
import { Text, View, TouchableOpacity, Image, Picker } from 'react-native';
import DropdownMenu from 'react-native-dropdown-menu';
import { arrow, topic } from '../../../../assets'
import {styles} from './Styles'

export default class SelectComponent extends React.PureComponent {
  componentDidMount(){
    this.props.getTopicsRequest()
  }
  state = { choosenLabel: '', choosenindex: '' }
  render() {
    var {
      getTopicsSuccess,
      getTopicsLoading
    } = this.props
    return (
      <View style={[styles.selectContainer, this.props.style]}>

        <Image
          source={topic}
          style={styles.topicIcon}
        />
        {/* <Text style={styles.filterText}>
            ALL TOPICS
          </Text> */}
        <View style={styles.container}>
          {/*Text to show selected picker value*/}
          {/* <Text style={styles.text}>{this.state.choosenLabel}</Text> */}
          {/*Text to show selected index */}
          {/* <Text style={styles.text}>{this.state.choosenindex}</Text> */}
          {/*Picker with multiple chose to choose*/}
          {/*selectedValue to set the preselected value if any*/}
          {/*onValueChange will help to handle the changes*/}
          <Picker 
            mode={'dropdown'}
            // itemStyle={
              
            // }
            // style={

            // }
            selectedValue={this.state.choosenLabel}
            onValueChange={
              (itemValue, itemIndex) => this.setState({
                choosenLabel: itemValue,
                choosenindex: itemIndex
              })
            }
            
          >
            <Picker.Item label="Hello" value="word1" />
            <Picker.Item label="React" value="word2" />
            <Picker.Item label="Native" value="word3" />
            <Picker.Item label="How" value="word4" />
            <Picker.Item label="are" value="word5" />
            <Picker.Item label="you" value="word6" />
          </Picker>
        </View>
        <Image
          source={arrow}
          style={styles.downArrow}
        />

        {/* <View
            style={{
              borderBottomColor: '#d5d5e0',
              borderBottomWidth: 0.5,
            }}
          />         */}
      </View>
    )
  }
}
