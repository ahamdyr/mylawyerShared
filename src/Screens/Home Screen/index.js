import React from 'react';
import MenuIcon from '../../Components/HomeHeaderIcons/Menu Icon'
import SearchIcon from '../../Components/HomeHeaderIcons/Search Icon'
import HeaderTitle from '../../Components/HomeHeaderIcons/Header Title'
import { createStackNavigator} from "react-navigation";
import LawyersScreen from '../Lawyers Screen'


export default HomeStack = createStackNavigator({
  Home:{
    screen: LawyersScreen,
    
    navigationOptions: ({ navigation }) => ({
      headerRight: <SearchIcon onPress={() =>navigation.toggleDrawer()}/>,
      headerLeft: <MenuIcon onPress={() =>navigation.toggleDrawer()}/>  ,
      //headerBackTitle: 'null',
      headerTitle:<HeaderTitle title={`My Lawyer`}/>,
      headerStyle :{
        backgroundColor:'#f6f6f6',
      }
    }),
  }
},{  
  headerLayoutPreset :"center"
});