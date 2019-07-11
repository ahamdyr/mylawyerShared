import React from 'react'
import { createStackNavigator } from 'react-navigation'
import {
  LoginWithMail,
  LoginWithPhone,
  SignUpWithMail,
  SignUpWithPhone
} from '../Screens'
import PhoneVerification from '../Screens/PhoneVerification'
import { logo_text } from '../../assets'
import ImageIcon from '../Components/Common/ImageIcon'
import AuthBackArrow from '../Components/AuthComponents/AuthBackArrow'
import { MAIN_COLOR } from '../Components/Constants'


const AuthRouter = createStackNavigator({
  LoginWithMail: {
    screen: LoginWithMail,
  },
  LoginWithPhone: {
    screen: LoginWithPhone,
  },
  SignUpWithMail: {
    screen: SignUpWithMail,
  },
  SignUpWithPhone: {
    screen: SignUpWithPhone,
  },
  PhoneVerification: {
    screen: PhoneVerification,
  }
}, {
    defaultNavigationOptions: ({ navigation }) => ({

      headerLeft: <AuthBackArrow onPress={() => navigation.navigate('UserApp')} />,
      headerTitle: <ImageIcon
        source={logo_text}
        style={{ width: 95, height: 26.5 }}
      />,
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        shadowOffset: {
          height: 0,
          },
        shadowRadius: 0,
        backgroundColor: MAIN_COLOR,
      },
      gesturesEnabled: false
    }),
    headerLayoutPreset: "center",
    navigationOptions: {
      
    }
  })

export default AuthRouter