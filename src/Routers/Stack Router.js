
import React from 'react'

import { createStackNavigator} from "react-navigation";
import TabRouter from './Tab Router'
import PublicQuestionScreen from '../Screens/Public Question Screen'

const RootStack = createStackNavigator({
  TabRouter:{
    screen: TabRouter,
  },
  PublicQuestionScreen:{
    screen: PublicQuestionScreen,
  }
},{  
  mode: 'modal',
  headerMode: 'none',
});

export default RootStack

