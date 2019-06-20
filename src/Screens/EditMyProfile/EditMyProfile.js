import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import { styles } from './Styles'
import {
  navigate,
  goBack
} from '../../Services/NavigationServices'
import { defaultPicture } from '../../../assets'
import ImageIcon from '../../Components/Common/ImageIcon'
import SubmitBtn from '../../Components/Common/SubmitBtn'
import SeperatorLine from '../../Components/Common/SeperatorLine'

import { editProfileIcon } from '../../../assets'
export default class EditMyProfile extends React.Component {
  render() {
    var {
      userPhoto,
      currentUser
    } = this.props
    return (
      <View style={styles.container}>
        <TouchableOpacity 
          onPress={() => goBack()}
          style={styles.headerStyle}
        >
          <Text style={styles.cancel}>
            Cancel
          </Text>
        </TouchableOpacity>
        <View style={styles.editContainer}>
          <View
            style={styles.profileImage}
          >
            <ImageBackground
              source={userPhoto ? { uri: userPhoto } : defaultPicture}
              style={styles.profileImage}
            >
              <ImageIcon 
                style={styles.camera}
                source={editProfileIcon}
              />
            </ImageBackground>
          </View>
          
          <TextInput
            underlineColorAndroid={'transparent'}
            value={currentUser.displayName}
            //onChange={}
            style={styles.name}
          />
          <SeperatorLine
            style={styles.line}
          />
          <TextInput
            underlineColorAndroid={'transparent'}
            value={'@osama123'}
            //onChange={}
            style={styles.inputStyle}
          />
          <SeperatorLine
            style={styles.line}
          />
          <TextInput
            underlineColorAndroid={'transparent'}
            value={currentUser.email}
            //onChange={}
            style={styles.inputStyle}
          />
          <SeperatorLine
            style={styles.line}
          />
          <TextInput
            underlineColorAndroid={'transparent'}
            value={currentUser.phoneNumber || '+2 0123456789'}
            //onChange={}
            style={styles.inputStyle}
          />
          <SeperatorLine
            style={styles.line}
          />
        </View>
        
        <SubmitBtn
            style={styles.saveBtn}
            text={'Save'}
            textStyle={styles.saveText}
            onPress={() => goBack()}
          />
      </View>
    );
  }
}