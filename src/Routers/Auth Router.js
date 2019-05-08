import { createStackNavigator} from 'react-navigation'
import {LoginScreen, SignUpScreen} from '../Screens'

const AuthRouter = createStackNavigator({
  Login : {
    screen: LoginScreen,
  },
  SignUp: {
    screen: SignUpScreen,
  }
},{
  defaultNavigationOptions:{
    headerStyle:{
      elevation:0,
      shadowOpacity:0
    }
  }
})

export default AuthRouter