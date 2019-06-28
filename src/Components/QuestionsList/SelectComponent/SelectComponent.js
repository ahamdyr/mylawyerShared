import React from 'react'
import { Text, View, TouchableOpacity, Image, Picker, Platform, PickerIOS } from 'react-native';
import { CustomPicker } from 'react-native-custom-picker'
import StatusText from '../../Common/StatusText';
import { arrow, topic } from '../../../../assets'
import { styles } from './Styles'
import SeperatorLine from '../../Common/SeperatorLine'
export default class SelectComponent extends React.PureComponent {
  _initialTopic = {
    id: '0',
    name: 'All TOPICS'
  }
  componentDidMount() {
    this.props.getTopicsRequest()
  }
  _onChange = (itemValue) => {
    // this.setState({
    //   choosenLabel: itemValue.name
    // })
    this.props.onSelect(itemValue.id)
  }
  state = { choosenLabel: this._initialTopic }
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
        {
          getTopicsLoading ?
            <StatusText text={'Loading...'} style={{ alignSelf: 'center', marginLeft: 20 }} />
            : getTopicsSuccess.length ?
              <CustomPicker
                placeholder={'All Topics'}
                //value={this.state.choosenLabel}
                //defaultValue={this._initialTopic}
                options={[this._initialTopic,...getTopicsSuccess]}
                getLabel={item => item.name}
                onValueChange={value => {
                  this._onChange(value)
                }}
                fieldTemplate={this.renderField}
                optionTemplate={this.renderOption}
                modalStyle={styles.modalStyle}
              />

              //   : <Picker
              //     style={styles.picker}                  
              //     mode={'dropdown'}
              //     itemStyle={styles.pickerItem}
              //     selectedValue={this.state.choosenLabel}
              //     onValueChange={(itemValue) => this._onChange(itemValue)}
              //   >
              //     <Picker.Item
              //       label={this._initialTopic.name}
              //       value={this._initialTopic}
              //       key={this._initialTopic.id}
              //     />
              //     {
              //       getTopicsSuccess.map(topic => {
              //         return (
              //           <Picker.Item
              //             label={topic.name}
              //             value={topic}
              //             key={topic.id}
              //           />
              //         )
              //       })
              //     }
              //   </Picker>
              
              : <StatusText text={'No Topics Found!'} style={{ alignSelf: 'center', marginLeft: 20 }} />
        }


        <View style={[styles.arrowContain, { backgroundColor: '#f6f6f6' }]}>
          <Image
            source={arrow}
            style={styles.downArrow}
          />
        </View>

      </View>
    )
  }
  
  renderField(settings) {
    const { selectedItem, defaultText, getLabel, clear } = settings
    return (
      <View style={styles.container}>
        <View>
          {!selectedItem && <Text style={styles.pickerItem}>{defaultText}</Text>}
          {selectedItem && (
            <View style={styles.innerContainer}>
              <Text style={styles.pickerItem}>
                {getLabel(selectedItem)}
              </Text>
              {/* <TouchableOpacity style={styles.clearButton} onPress={clear}>
                <Text style={{ color: '#fff' }}>Clear</Text>
              </TouchableOpacity> */}
            </View>
          )}
        </View>
      </View>
    )
  }

  renderOption(settings) {
    const { item, getLabel } = settings
    return (
      <View style={styles.optionContainer}>
          <Text style={styles.optionText}>{getLabel(item)}</Text>
        <SeperatorLine style={styles.line}/>
      </View>
    )
  }
}
