
import React from 'react'
import { Easing, Animated } from 'react-native'
import { createStackNavigator} from "react-navigation";
import TabRouter from './Tab Router'
import PublicQuestionScreen from '../Screens/Public Question Screen'
import PrivateQuestionScreen from '../Screens/PrivateQuestionScreen'
import SocialScreen from '../Screens/Social Login'
import Spinner from '../Screens/Spinner'

const RootStack = createStackNavigator({
  TabRouter:{
    screen: TabRouter,
  },
  PublicQuestionScreen:{
    screen: PublicQuestionScreen,
  },
  PrivateQuestionScreen:{
    screen: PrivateQuestionScreen,
  }  
},{  
  initialRouteName: "TabRouter",
  mode: 'modal',
  headerMode: 'none'  
});

const ModalStack =  createStackNavigator({
  RootStack: {
    screen: RootStack,
  },
  SocialScreen: SocialScreen,
  Spinner: Spinner
},{
  initialRouteName: "RootStack",
  mode: 'modal',
  headerMode: 'none',

  cardStyle: {
    backgroundColor: 'rgba(19,19,20,0.5)',    
    opacity: 1,
    
  },
  transitionConfig: () => ({    
    // transitionSpec: {
    //   duration: 0,
    //   timing: Animated.timing,
    //   easing: Easing.step0,
    //   },
  }),

  //transparentCard : true
})

export default ModalStack