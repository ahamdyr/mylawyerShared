import React from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
  Text,
  Keyboard,
  ScrollView,
  TextInput,
  Platform,
  KeyboardAvoidingView
} from "react-native";
import { styles } from './Styles'
import BlackX from '../../Components/Common/BlackX'
import SubmitBtn from '../../Components/Common/SubmitBtn'
import {
  goBack
} from '../../Services/NavigationServices'
import SeperatorLine from '../../Components/Common/SeperatorLine'
export default class ContactUs extends React.Component {
  render() {
    var {
      isLoggedUser,
      userPhoto
    } = this.props
    return (
      <View style={styles.container}>
        <BlackX
          onPress={() => goBack()}
        />

        <Text
          style={styles.title}
        >
          Contact us
        </Text>

        <KeyboardAvoidingView
          keyboardVerticalOffset={20}
          style={[
            styles.questionContainer,
            //partial ? styles.partial : styles.full
          ]}
          behavior={'padding'}
        >
          <TouchableOpacity
            activeOpacity={1}
            style={[
              styles.title,
            ]}
            //onPress={() => this._titleKeyBoardToggle()}
          >
            <TextInput
              ref={(ref) => this._titleRef = ref}
              blurOnSubmit={true}
              returnKeyType={'done'}
              style={styles.titleText}
              // multiline={true}
              // numberOfLines={2}
              underlineColorAndroid="transparent"
              placeholder={'Email '}
              //onChangeText={this._titleChange}
              autoFocus
              shouldCancelWhenOutside={true}
            />
          </TouchableOpacity>

          <SeperatorLine style={styles.seperator} />

          <TouchableOpacity
            activeOpacity={1}
            style={[
              styles.body,
              //partial ? { flex: 3 } : { flex: 8 }
            ]}
            //onPress={() => this._bodyKeyBoardToggle()}
          >
            <ScrollView
              style={styles.body}
            >
              <TextInput
                style={styles.bodyText}
                blurOnSubmit={true}
                returnKeyType={'done'}
                autoGrow={false}
                scrollEnabled={true}
                ref={(ref) => this._bodyRef = ref}
                underlineColorAndroid="transparent"
                placeholder={'write your message here'}
                //onChangeText={this._bodyChange}
                //multiline={true}
                shouldCancelWhenOutside={true}
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

        <SubmitBtn
          style={styles.btnStyle}
          text={'SEND'}
          textStyle={styles.textStyle}
          onPress={()=>goBack()}
        />
      </View>
    );
  }
}

