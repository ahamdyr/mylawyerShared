
import React from 'react'
import { createStackNavigator} from "react-navigation";
import TabBar from './TabBar'
import AnswerQuestionScreen from '../LawyerScreens/AnswerQuestionScreen'
import ViewQuestionScreen from '../LawyerScreens/ViewQuestionScreen'
import SideMenuStack from '../Routers/SideMenuStack'
import ContactUs from '../Screens/ContactUs'
import TermsAndConditions from '../Screens/TermsAndConditions'
import About from '../Screens/About'

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
  ContactUs:{
    screen: ContactUs,
  },
  TermsAndConditions:{
    screen: TermsAndConditions
  },
  About:{
    screen: About
  },
},{  
  initialRouteName: "TabBar",
  mode: 'modal',
  headerMode: 'none'  
});