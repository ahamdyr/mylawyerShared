
import React from 'react'
import { createStackNavigator} from "react-navigation";
import TabBar from './TabBar'
import AnswerQuestionScreen from '../LawyerScreens/AnswerQuestionScreen'
import ViewQuestionScreen from '../LawyerScreens/ViewQuestionScreen'
import SideMenu from '../Screens/SideMenu'
import Search from '../Screens/Search'
import EditMyProfile from '../Screens/EditMyProfile'
import Settings from '../Screens/Settings'
import ContactUs from '../Screens/ContactUs'
import TermsAndConditions from '../Screens/TermsAndConditions'
import About from '../Screens/About'
import ResetPassword from '../Screens/ResetPassword'

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
  SideMenu:{
    screen: SideMenu,
  },  
  EditMyProfile:{
    screen: EditMyProfile,
  },
  Settings:{
    screen: Settings,
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
  ResetPassword:{
    screen: ResetPassword
  }
},{  
  initialRouteName: "TabBar",
  mode: 'modal',
  headerMode: 'none'  
});