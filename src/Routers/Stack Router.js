
import React from 'react'

import { createStackNavigator} from "react-navigation";
import TabRouter from './Tab Router'
import MenuIcon from '../Components/Menu Icon'

const StackRouter = createStackNavigator({
  TabRouter:{
    screen: TabRouter,
    
    navigationOptions: ({ navigation }) => ({
      
      headerLeft:<MenuIcon onPress={() =>navigation.toggleDrawer()}/>  ,
      headerBackTitle: 'null',
      title:`Home`,
      
    }),
  }
},{
  headerBackTitleVisible:false,
  headerMode:"float",
  headerTransitionPreset :"fade-in-place",
  headerLayoutPreset :"center",
  
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#fff',
    },
    headerTintColor: '#000',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    
  },
});

export default StackRouter

