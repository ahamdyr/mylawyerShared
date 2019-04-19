import { createStackNavigator} from 'react-navigation'
import {Login} from '../Screens'

const AuthRouter = createStackNavigator({
  Login : Login
})

export default AuthRouter