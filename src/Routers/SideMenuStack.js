import React from 'react'
import { createStackNavigator} from "react-navigation";
import SideMenu from '../Screens/SideMenu'
import Settings from '../Screens/Settings'
import ContactUs from '../Screens/ContactUs'
import TermsAndConditions from '../Screens/TermsAndConditions'
import About from '../Screens/About'
import ProfileStack from './ProfileStack'


export default SideMenuStack = createStackNavigator({
  SideMenu:{
    screen: SideMenu,
  },
  ProfileStack:{
    screen: ProfileStack,
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
},
{
  //mode: 'modal',
  headerMode: 'none'  
})