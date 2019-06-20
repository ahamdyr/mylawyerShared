import React from 'react';
import { Text, View } from 'react-native';
import SideMenuBtn from '../../Components/SideMenu/SideMenuBtn'
import ImageIcon from '../../Components/Common/ImageIcon'
import { WhiteX } from '../../Components/Social Components/SocialBtns'
import { styles } from './Styles'
import {
  navigate,
  goBack
} from '../../Services/NavigationServices'
import { defaultPicture } from '../../../assets'
import SeperatorLine from '../../Components/Common/SeperatorLine'

export default class Settings extends React.Component {
  render() {
    var {
      isLoggedUser,
      userPhoto
    } = this.props
    return (
      <View style={styles.container}>

        <Text
          style={styles.title}
        >
          Settings
        </Text>

        <View 
          style={{
            flex:1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <SeperatorLine
            style={styles.line}
          />
          <SideMenuBtn
            btnTitle={'Reset Password'}
            style={styles.btn}
          //onPress={()=>navigate('ContactUs')}
          />
          <SeperatorLine
            style={styles.line}
          />
          <SideMenuBtn
            btnTitle={'Log out'}
            style={styles.btn}
          // onPress={()=> {
          //   navigate('TermsAndConditions')
          // }}
          />
          <SeperatorLine
            style={styles.line}
          />
          <SideMenuBtn
            btnTitle={'Delete Account'}
            style={styles.btn}
            textStyle={styles.textStyle}
          // onPress={()=> {
          //   navigate('About')
          // }}
          />
          <SeperatorLine
            style={styles.line}
          />
        </View>
        <WhiteX
          style={styles.closeIcon}
          onPress={() => {
            goBack()
          }}
        />
      </View>
    );
  }
}

