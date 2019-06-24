import React from 'react';
import {
  StyleSheet
} from 'react-native'
import MenuIcon from '../../Components/HomeHeaderIcons/Menu Icon'
import SearchIcon from '../../Components/HomeHeaderIcons/Search Icon'
import HeaderTitle from '../../Components/HomeHeaderIcons/Header Title'
import { createStackNavigator} from "react-navigation";
import LawyersScreen from '../Lawyers Screen'
import Search from '../Search'

export default HomeStack = createStackNavigator({
  Home:{
    screen: LawyersScreen,    
    // navigationOptions: ({ navigation }) => ({
    //   headerRight: <SearchIcon onPress={() =>navigation.navigate('Search')}/>,
    //   headerLeft: <MenuIcon onPress={() =>navigation.navigate('SideMenu')}/>  ,
    //   //headerBackTitle: 'null',
    //   headerTitle:<HeaderTitle title={`My Lawyer`}/>,
    //   headerStyle:{
    //     elevation:0,
    //     shadowOpacity:0,
    //     backgroundColor:'#f6f6f6',
    //   }
    // }),
  },
  Search:{
    screen: Search,
  },
},{  
  headerLayoutPreset :"center",
  defaultNavigationOptions: ({ navigation }) => ({
    headerRight: <SearchIcon 
      onPress={() =>navigation.navigate('Search')}
      style={styles.searchIconStyle}
    />,
    headerLeft: <MenuIcon 
      onPress={() =>navigation.navigate('SideMenu')}
      style={styles.menuIconStyle}
    />  ,
    //headerBackTitle: 'null',
    headerTitle:<HeaderTitle title={`My Lawyer`}/>,
    headerStyle:{
      elevation:0,
      shadowOpacity:0,
      backgroundColor:'#f6f6f6',
    }
  }),
});


const styles = StyleSheet.create({
  menuIconStyle : {
    width: 50,
    height: 50,
  },
  searchIconStyle: {
    width: 50,
    height: 50
  }
})