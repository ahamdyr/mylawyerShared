
import {createAppContainer, createStackNavigator } from "react-navigation";
import MainRouter from './Main Router'
import AuthRouter from './Auth Router'
import {AuthLoading} from '../Screens'
import SocialScreen from '../Screens/Social Login'
import Spinner from '../Screens/Spinner'
import { Easing, Animated } from 'react-native'
import LawyerDetails from '../Screens/LawyerDetails'
import LawyerVerificationStack from '../LawyerRouters/LawyerVerifyStack'
import UserTypeScreen from '../Screens/UserType'
import LawyerStack from '../LawyerRouters/LawyerStack'

const AppRouter = createStackNavigator({
  UserApp : MainRouter,
  UserAuth : AuthRouter,
  LawyerAuth : LawyerVerificationStack,
  LawyerApp : LawyerStack,
  AuthLoading : AuthLoading
},{
  initialRouteName:'UserApp',
  headerMode: "none"
})

const ModalStack =  createStackNavigator({
  AppRouter:AppRouter,
  SocialScreen: SocialScreen,
  Spinner: Spinner,
  LawyerDetails: LawyerDetails,
  UserTypeScreen: UserTypeScreen,
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
//export default createAppContainer(LawyerStack);
//export default createAppContainer(LawyerVerificationStack);

