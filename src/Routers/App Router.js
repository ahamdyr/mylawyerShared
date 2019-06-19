
import {createAppContainer, createStackNavigator } from "react-navigation";
import MainRouter from './Main Router'
import AuthRouter from './Auth Router'
import {AuthLoading} from '../Screens'
import SocialScreen from '../Screens/Social Login'
import Spinner from '../Screens/Spinner'
import { Easing, Animated } from 'react-native'
import LawyerVerificationStack from './LawyerVerifyStack'

const AppRouter = createStackNavigator({
  App : MainRouter,
  Auth : AuthRouter,
  AuthLoading : AuthLoading
},{
  initialRouteName:'App',
  headerMode: "none"
})

const ModalStack =  createStackNavigator({
  AppRouter:AppRouter,
  SocialScreen: SocialScreen,
  Spinner: Spinner
},{
  
  mode: 'modal',
  headerMode: 'none',

  cardStyle: {
    backgroundColor: 'rgba(19,19,20,0.5)',    
    opacity: 1,
    
  },
  transitionConfig: () => ({    
    transitionSpec: {
      duration: 0,
      timing: Animated.timing,
      easing: Easing.step0,
      },
  }),

  //transparentCard : true
})
export default createAppContainer(ModalStack);

//export default createAppContainer(LawyerVerificationStack);

