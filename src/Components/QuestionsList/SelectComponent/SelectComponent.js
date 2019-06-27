import React from 'react'
import { Text, View, TouchableOpacity, Image, Picker } from 'react-native';
import DropdownMenu from 'react-native-dropdown-menu';
import { arrow, topic } from '../../../../assets'
import { styles } from './Styles'

export default class SelectComponent extends React.PureComponent {
  _initialTopic = {
    id: '0',
    name: 'All TOPICS'
  }
  componentDidMount() {
    this.props.getTopicsRequest()
  }
  _onChange = (itemValue) => {
    this.setState({
      choosenLabel: itemValue
    })
    this.props.onSelect(itemValue.id)
  }
  state = { choosenLabel: ''}
  render() {
    var { 
      getTopicsSuccess 
    } = this.props
    //console.log('el data  ', this.state)
    return (
      <View style={[styles.selectContainer, this.props.style]}>

        <Image
          source={topic}
          style={styles.topicIcon}
        />
        {/* <Text style={styles.filterText}>
            ALL TOPICS
          </Text> */}
        {
          getTopicsSuccess.length ?
            <Picker
              style={styles.picker}
              mode={'dropdown'}
              itemStyle={styles.pickerItem}
              selectedValue={this.state.choosenLabel}
              onValueChange={(itemValue) => this._onChange(itemValue)}
            >
              <Picker.Item
                label={this._initialTopic.name}
                value={this._initialTopic}
                key={this._initialTopic.id}
              />
              {
                getTopicsSuccess.map(topic => {
                  return (
                    <Picker.Item
                      label={topic.name}
                      value={topic}
                      key={topic.id}
                    />
                  )
                })
              }
            </Picker>
            : <Text style={{
              fontSize: 16,
              color: '#0b7f7c',
              alignSelf: 'center',
              marginLeft: 20
            }}>
              No Topics Found!
            </Text>
        }
        <View style={[styles.arrowContain, {backgroundColor: '#f6f6f6'}]}>
          <Image
            source={arrow}
            style={styles.downArrow}
          />
        </View>

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
