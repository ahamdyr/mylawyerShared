
import React from 'react'
import { createStackNavigator} from "react-navigation";
import TabBar from './TabBar'
import AnswerQuestionScreen from '../LawyerScreens/AnswerQuestionScreen'
import ViewQuestionScreen from '../LawyerScreens/ViewQuestionScreen'
import SideMenuStack from '../Routers/SideMenuStack'

export default  LawyerStack = createStackNavigator({
  TabBar:{
    screen: TabBar,
  },
  ViewQuestionScreen:{
    screen: ViewQuestionScreen,
  },
  AnswerQuestionScreen:{
    screen: AnswerQuestionScreen,
  },
  SideMenuStack:{
    screen: SideMenuStack,
  },
},{  
  initialRouteName: "TabBar",
  mode: 'modal',
  headerMode: 'none'  
});