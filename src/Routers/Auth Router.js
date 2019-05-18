import React from 'react'
import { createStackNavigator} from 'react-navigation'
import {
  LoginScreen,
  SignUpWithMail,
  SignUpWithPhone
} from '../Screens'
import HeaderTitle from '../Components/HomeHeaderIcons/Header Title'
import AuthBackArrow from '../Components/AuthComponents/AuthBackArrow'
import {MAIN_COLOR} from '../Components/Constants'
const AuthRouter = createStackNavigator({
  Login : {
    screen: LoginScreen,
  },
  SignUpWithMail: {
    screen: SignUpWithMail,
  },
  SignUpWithPhone:{
    screen: SignUpWithPhone,
  }
},{
  defaultNavigationOptions: ({navigation}) => ({
    
    headerLeft: <AuthBackArrow onPress={() =>navigation.navigate('App')}/>  ,
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
  initialRouteName:'SignUp'
})

export default AuthRouter