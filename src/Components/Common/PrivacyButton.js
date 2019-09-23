import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image
} from 'react-native'
import { downArrow } from '../../../assets'
import { CustomPicker } from 'react-native-custom-picker'
import SeperatorLine from './SeperatorLine'
import { WIDTH, STATUS_BAR_HEIGHT, HEIGHT } from '../Constants'
import { changeQuestionPrivacyApi } from '../../Services/BackendServices/QuestionPrivacy'
import { navigate, goBack } from '../../Services/NavigationServices'

export default class PrivacyButton extends React.PureComponent {

  renderField(settings) {
    const { selectedItem, defaultText, getLabel, clear } = settings
    return (
      <View>
        {!selectedItem && <Text style={styles.pickerItem}>{defaultText}</Text>}
        {selectedItem && (
          <View style={styles.innerContainer}>
            <Text style={styles.pickerItem}>
              {getLabel(selectedItem)}
            </Text>
          </View>
        )}
      </View>
    )
  }

  renderOption(settings) {
    const { item, getLabel } = settings
    return (
      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>{getLabel(item)}</Text>
        <SeperatorLine style={styles.line} />
      </View>
    )
  }
  _initialTopic = this.props.isPrivate ? 'Private' : 'Public'

  _onChange = async (itemValue) => {
    var {
      questionID, accessToken
    } = this.props
    if(itemValue == this._initialTopic){
      //console.log('no change')
    }
    else{
      navigate('Spinner')
      var res = await changeQuestionPrivacyApi(questionID, itemValue, accessToken)
      goBack()
    }
  }

  state = { choosenLabel: this._initialTopic }

  render() {
    return (
      <TouchableOpacity 
        style={[styles.btnContainer, this.props.style]}
        onPress={()=>this._pickerRef.showOptions()}
        activeOpacity={0.5}
      >
        <CustomPicker
          ref={(ref) => {
            this._pickerRef = ref
          }}
          placeholder={'All Topics'}
          scrollViewProps={{
            scrollEnabled: true,
            indicatorStyle: 'black'
          }}
          defaultValue={this._initialTopic}
          options={['Public', 'Private']}
          getLabel={item => item}
          onValueChange={value => {
            this._onChange(value)
          }}
          fieldTemplate={this.renderField}
          optionTemplate={this.renderOption}
        />

        <Image
          source={downArrow}
          style={styles.downArrow}
        />

      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  btnContainer: {
    width: 120,
    height: 40,
    borderRadius: 14,
    backgroundColor: '#0b7f7c',
    shadowColor: "#13131419",
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowRadius: 32,
    shadowOpacity: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  line:{
    position: 'absolute',
    bottom: 0,
    width: WIDTH,
    height: 1,
    opacity: 0.26,
    backgroundColor: "#a0a0a4"
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  optionContainer: {
    height: 56,
    width: WIDTH,
    justifyContent: 'center',
  },
  optionInnerContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  optionText: {
    marginLeft: 15,
    fontFamily: "Lato-Bold",
    fontSize: 16,    
    letterSpacing: 0.4,
    textAlign: "left",
    color: "#131314"
  },  
  pickerItem: {
    marginBottom: 5,
    fontFamily: 'Lato-Bold',
    fontSize: 20,
    fontWeight: "900",
    fontStyle: "normal",
    color: '#fcfcfc',
  },
  selectContainer: {
    width: WIDTH,
    height: 55,
    flexDirection: 'row',
    backgroundColor: '#f6f6f6',
    borderBottomColor: '#d5d5e0',
    borderBottomWidth: 0.5,
    shadowColor: "#00000026",
    shadowOffset: {
      width: 8,
      height: 13.9
    },
    shadowRadius: 40,
    shadowOpacity: 1
  },
  downArrow: {
    width: 20,
    height: 11,
    marginLeft: 10,
  }
})
