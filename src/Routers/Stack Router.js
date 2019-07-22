
import React from 'react'
import { createStackNavigator} from "react-navigation";
import TabRouter from './Tab Router'
import PublicQuestionScreen from '../Screens/Public Question Screen'
import PrivateQuestionScreen from '../Screens/PrivateQuestionScreen'
import SideMenu from '../Screens/SideMenu'
import Search from '../Screens/Search'
import EditMyProfile from '../Screens/EditMyProfile'
import Settings from '../Screens/Settings'
import ContactUs from '../Screens/ContactUs'
import TermsAndConditions from '../Screens/TermsAndConditions'
import About from '../Screens/About'
import ResetPassword from '../Screens/ResetPassword'

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
  initialRouteName: "TabRouter",
  mode: 'modal',
  headerMode: 'none'  
});


export default RootStack