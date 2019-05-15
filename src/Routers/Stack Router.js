
import React from 'react'

import { createStackNavigator} from "react-navigation";
import TabRouter from './Tab Router'
import PublicQuestionScreen from '../Screens/Public Question Screen'
import PrivateQuestionScreen from '../Screens/PrivateQuestionScreen'
//import SocialScreen from '../Screens/Social Login'

const RootStack = createStackNavigator({
  TabRouter:{
    screen: TabRouter,
  },
  PublicQuestionScreen:{
    screen: PublicQuestionScreen,
  },
  PrivateQuestionScreen:{
    screen: PrivateQuestionScreen,
  },
  // SocialScreen:{
  //   screen: SocialScreen
  // }

},{  
  mode: 'modal',
  headerMode: 'none',
});

export default RootStack

