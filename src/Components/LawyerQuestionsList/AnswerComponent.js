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
import SubmitBtn from '../Common/SubmitBtn'
import { camera, attachment } from '../../../assets'
import ImageIcon from '../Common/ImageIcon'
import { STATUS_BAR_HEIGHT, WIDTH, HEIGHT, MAIN_COLOR } from '../Constants'
import SeperatorLine from '../Common/SeperatorLine'
import KeyboardListener from 'react-native-keyboard-listener'

export default class AnswerComponent extends React.PureComponent {
  state = {
    focused: false,
    key: '',
    title: '',
    body: ''
  }
  _titleChange = (val) => {
    //this.setState({title : val}) 
    this.props.setQuestionTitle(val)
  }
  _bodyChange = (val) => {
    //this.setState({body : val}) 
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
      partial,
      clear,
      offset
    } = this.props
    var {
      focused,
      key
    } = this.state
    if (clear) {
      //console.log('clear  ',clear)
      this._bodyRef.clear()
      this._titleRef.clear()
      // this.state.title = ''
      // this.state.body = ''
    }
    //console.log('focused  ',focused)
    return (
      <View style={styles.container}>
        <View style={styles.questionContainer}>
          <KeyboardAvoidingView
            style={[
              {flex: 1}
              //styles.questionContainer,
              //partial || focused ? styles.partial : styles.full,
              //this.props.style
            ]}
            keyboardVerticalOffset={STATUS_BAR_HEIGHT + offset}
            behavior={'padding'}
            enabled
          >
            <KeyboardListener
              onDidShow={() => {
                this.setState({ focused: true })
                //this.setState({ key: new Date().getTime() })
              }}
              onDidHide={() => {
                //this.setState({ key: new Date().getTime() })
                this.setState({ focused: false })
              }}
            />
            <TouchableOpacity
              activeOpacity={1}
              style={[
                styles.body,
                //partial || focused ? { flex: 0.75 } : { flex: 0.875 }
              ]}
              onPress={() => this._bodyKeyBoardToggle()}
            >
              <ScrollView
                style={{flex: 1}}
              // keyboardDismissMode={'interactive'}
              // keyboardShouldPersistTaps={'never'}
              >
                <TextInput
                  blurOnSubmit={true}
                  style={styles.bodyText}
                  //value={this.state.body}                  
                  autoGrow={false}
                  scrollEnabled={true}
                  ref={(ref) => this._bodyRef = ref}
                  underlineColorAndroid="transparent"
                  placeholder={this.props.bodyPlaceHolder || 'Write Your Answer...'}
                  //onChangeText={this._bodyChange}
                  multiline={true}
                //onEndEditing={()=>Keyboard.dismiss}
                //shouldCancelWhenOutside={true}
                />
              </ScrollView >
            </TouchableOpacity>
          </KeyboardAvoidingView>
          <View style={styles.attachBtnsContainer}>
            <TouchableOpacity
              //onPress={this._uploadCameraImage}
              style={styles.cameratIconContainer}>
              <ImageIcon
                style={styles.cameratIcon}
                source={camera}
              />
            </TouchableOpacity>
            <View style={{ marginRight: 10 }} />
            <TouchableOpacity
              //onPress={this._onAttachPress}
              style={styles.cameratIconContainer}>
              <ImageIcon
                style={styles.attachmentIcon}
                source={attachment}
              />
            </TouchableOpacity>
          </View>
        </View>
        <SubmitBtn
          style={styles.answerBtnStyle}
          text={'Answer'}
          textStyle={styles.answerTextStyle}
        //onPress={() => navigate('AnswerQuestionScreen', { question: this.props.item.item })}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    flex: 1,
    marginTop: 10,
    marginBottom: 22,
    backgroundColor: "#ffffff"
  },
  attachBtnsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 8,
    marginBottom: 10,
    //backgroundColor: 'blue'
  },
  attachmentIcon: {
    width: 19,
    height: 19,
    //color: MAIN_COLOR,
    //marginTop: 10
  },
  cameratIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: "#ffffff",
    shadowColor: "rgba(11, 127, 124, 0.25)",
    shadowOffset: {
      width: 0,
      height: 18
    },
    shadowRadius: 40,
    shadowOpacity: 1
  },
  cameratIcon: {
    width: 19,
    height: 17,
    //color: MAIN_COLOR,
    //marginTop: 20
  },
  answerBtnStyle: {
    marginTop: 10,
    marginBottom: 15,
    width: WIDTH - 32,
    height: 38,
    borderRadius: 28,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#0b7f7c",
    shadowColor: "rgba(255, 255, 255, 0.25)",
    shadowOffset: {
      width: 0,
      height: 18
    },
    shadowRadius: 40,
    shadowOpacity: 1
  },
  answerTextStyle: {
    fontFamily: "Lato-Bold",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff"
  },
  questionContainer: {
    flex: 1,
    marginTop: 16,
    marginRight: 16,
    marginLeft: 16,
    //marginBottom: 63,
    backgroundColor: "#f6f6f6",
    borderRadius: 5,
    elevation: 3,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowRadius: 3,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#ebebeb"
  },
  title: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    width: WIDTH - 72,
    alignItems: 'center',
    //backgroundColor: 'blue',
    justifyContent: 'center'
  },
  titleText: {
    //flex: 1,
    width: 300,
    //flexWrap: 'wrap',
    fontFamily: 'Lato-Bold',
    //alignSelf: 'center',
    letterSpacing: 0.4,
    textAlign: 'center',
    fontSize: 16,
    color: MAIN_COLOR
  },
  body: {
    flex: 1,
    paddingTop: 19,
    paddingLeft: 21,
    paddingRight: 18,
    marginBottom: 10,
    //backgroundColor: 'blue',
  },
  bodyText: {
    //flex: 1,
    flexWrap: 'wrap',
    fontFamily: "Lato-Regular",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 19,
    letterSpacing: 0,
    color: "#454546"
    //alignSelf: 'center',
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