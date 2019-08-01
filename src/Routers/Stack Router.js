
import React from 'react'
import { createStackNavigator} from "react-navigation";
import TabRouter from './Tab Router'
import PublicQuestionScreen from '../Screens/Public Question Screen'
import PrivateQuestionScreen from '../Screens/PrivateQuestionScreen'
import SideMenuStack from './SideMenuStack'

export default RootStack = createStackNavigator({
  TabRouter:{
    screen: TabRouter,
  },
  PublicQuestionScreen:{
    screen: PublicQuestionScreen,
  },
  PrivateQuestionScreen:{
    screen: PrivateQuestionScreen,
  },
  SideMenuStack:{
    screen: SideMenuStack,
  }
},{  
  initialRouteName: "TabRouter",
  mode: 'modal',
  headerMode: 'none'  
});