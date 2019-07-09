import React from 'react'
import { createStackNavigator} from 'react-navigation'
import {
  LoginWithMail,
  LoginWithPhone,
  SignUpWithMail,
  SignUpWithPhone
} from '../Screens'
import PhoneVerification from '../Screens/PhoneVerification'
import HeaderTitle from '../Components/HomeHeaderIcons/Header Title'
import AuthBackArrow from '../Components/AuthComponents/AuthBackArrow'
import {MAIN_COLOR} from '../Components/Constants'

const AuthRouter = createStackNavigator({
  LoginWithMail : {
    screen: LoginWithMail,
  },
  LoginWithPhone:{
    screen: LoginWithPhone
  },
  SignUpWithMail: {
    screen: SignUpWithMail,
  },
  SignUpWithPhone:{
    screen: SignUpWithPhone,
  },
  PhoneVerification:PhoneVerification
},{
  defaultNavigationOptions: ({navigation}) => ({
    
    headerLeft: <AuthBackArrow onPress={() =>navigation.navigate('UserApp')}/>  ,
    headerTitle: <HeaderTitle 
                    title={`My Lawyer`}
                    style = {{color: '#feffff'}}
                  />,
    headerStyle:{
      elevation:0,
      shadowOpacity:0,
      backgroundColor: MAIN_COLOR,
    }
  }),
  headerLayoutPreset :"center",
})

export default AuthRouter