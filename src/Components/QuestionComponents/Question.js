import React from 'react'
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  TextInput,
  Platform,
  KeyboardAvoidingView
} from 'react-native';
import { STATUS_BAR_HEIGHT, WIDTH, HEIGHT, MAIN_COLOR } from '../Constants'
import SeperatorLine from '../Common/SeperatorLine'
import KeyboardSpacer from 'react-native-keyboard-spacer'
import KeyboardListener from 'react-native-keyboard-listener'

export default class QuestionComponent extends React.PureComponent {
  state={
    focused: true
  }
  _titleChange = (val) => {
    this.props.setQuestionTitle(val)
  }
  _bodyChange = (val) => {
    this.props.setQuestionBody(val)
  }
  _titleKeyBoardToggle = () => {
    if (this._titleRef.isFocused()) {
      Keyboard.dismiss()
    }
    else {
      this._titleRef.focus()
    }
  }
  _bodyKeyBoardToggle = () => {
    if (this._bodyRef.isFocused()) {
      Keyboard.dismiss()
    }
    else {
      this._bodyRef.focus()
    }
  }


  render() {
    var {
      partial
    } = this.props
    var {
      focused
    } = this.state
    return (
      <KeyboardAvoidingView
        keyboardVerticalOffset={STATUS_BAR_HEIGHT + 10}
        style={[
          styles.questionContainer,
          partial || focused ? styles.partial : styles.full
        ]}
        behavior={'padding'}
        enabled
      >
        <KeyboardListener          
          onDidShow={() => this.setState({ focused: true }) }
          onDidHide={() => this.setState({ focused: false })}
        />
        <TouchableOpacity
          activeOpacity={1}
          style={[
            styles.title,
            partial || focused ? { flex: 0.2 } : { flex: 0.125 }
          ]}
          onPress={() => this._titleKeyBoardToggle()}>
          <TextInput
            blurOnSubmit={true}
            returnKeyType={'done'}
            ref={(ref) => this._titleRef = ref}
            style={styles.titleText}
            multiline={true}
            numberOfLines={2}
            underlineColorAndroid="transparent"
            placeholder={'Title '}
            onChangeText={this._titleChange}
            autoFocus
            //shouldCancelWhenOutside={true}
          />
        </TouchableOpacity>

        <SeperatorLine style={styles.seperator} />

        <TouchableOpacity
          activeOpacity={1}
          style={[
            styles.body,
            partial || focused ? { flex: 0.75 } : { flex: 0.875 }
          ]}
          onPress={() => this._bodyKeyBoardToggle()}>
          <ScrollView
            style={styles.body}
            // keyboardDismissMode={'interactive'}
            // keyboardShouldPersistTaps={'never'}
          >
            <TextInput
              blurOnSubmit={true}
              returnKeyType={'done'}
              style={styles.bodyText}
              autoGrow={false}
              scrollEnabled={true}
              ref={(ref) => this._bodyRef = ref}
              underlineColorAndroid="transparent"
              placeholder={'Write your problem here'}
              onChangeText={this._bodyChange}
              multiline={true}
              //onEndEditing={()=>Keyboard.dismiss}
              //shouldCancelWhenOutside={true}
            />
          </ScrollView >
        </TouchableOpacity>
        {/* { 
            Platform.OS === 'android' ? 
            <KeyboardSpacer 
              style={styles.keyBad} 
              //topSpacing={-110}              
            /> 
            : null 
          } */}
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  partial: {
    marginBottom: 10
  },
  full: {
    marginBottom: 55
  },
  questionContainer: {
    flex: 1,
    marginTop: 16,
    marginRight: 16,
    marginLeft: 16,
    //height: 450,
    backgroundColor: 'white',
    elevation: 16,
    shadowColor: "#0000000c",
    shadowOffset: {
      width: 4,
      height: 6.9
    },
    shadowRadius: 32,
    shadowOpacity: 1,
    borderRadius: 10
  },
  title: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    width: WIDTH - 72,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleText: {
    fontFamily: 'Lato-Bold',
    letterSpacing: 0.4,
    fontSize: 16,
    color: MAIN_COLOR
  },
  body: {
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 5,
    paddingRight: 3
  },
  bodyText: {
    flex: 1,
    flexWrap: 'wrap',
    fontFamily: 'Lato-Regular',
    letterSpacing: 0.4,
    fontSize: 16,
    color: '#74747a',
    alignSelf: 'center',
    //width: 300,
    // marginTop: 10,
    // marginBottom: 20
  },
  seperator: {
    borderBottomColor: '#d5d5e0',
    borderBottomWidth: 1,
    alignSelf: 'center',
    //opacity: 0.26,
    width: WIDTH - 80
  },
  keyBad: {
    //marginTop: -30
  }
})