
import React from 'react'

import { createStackNavigator} from "react-navigation";
import TabRouter from './Tab Router'

import MenuIcon from '../Components/Menu Icon'
import SearchIcon from '../Components/Search Icon'
import HeaderTitle from '../Components/Header Title'

const StackRouter = createStackNavigator({
  TabRouter:{
    screen: TabRouter,
    
    navigationOptions: ({ navigation }) => ({
      headerRight: <SearchIcon onPress={() =>navigation.toggleDrawer()}/>,
      headerLeft: <MenuIcon onPress={() =>navigation.toggleDrawer()}/>  ,
      //headerBackTitle: 'null',
      headerTitle:<HeaderTitle title={`My Lawyer`}/>,
      
      
    }),
  }
},{  
  headerLayoutPreset :"center"
});

export default StackRouter

