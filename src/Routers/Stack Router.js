
import React from 'react'
import { createStackNavigator} from "react-navigation";
import TabRouter from './Tab Router'
import PublicQuestionScreen from '../Screens/Public Question Screen'
import PrivateQuestionScreen from '../Screens/PrivateQuestionScreen'
import ContactUs from '../Screens/ContactUs'
import TermsAndConditions from '../Screens/TermsAndConditions'
import About from '../Screens/About'
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
  initialRouteName: "TabRouter",
  mode: 'modal',
  headerMode: 'none'  
});