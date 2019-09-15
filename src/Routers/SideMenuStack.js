import React from 'react'
import { createStackNavigator} from "react-navigation";
import SideMenu from '../Screens/SideMenu'
import ProfileStack from './ProfileStack'


export default SideMenuStack = createStackNavigator({
  SideMenu:{
    screen: SideMenu,
  },
  ProfileStack:{
    screen: ProfileStack,
  }
},
{
  //mode: 'modal',
  headerMode: 'none'  
})