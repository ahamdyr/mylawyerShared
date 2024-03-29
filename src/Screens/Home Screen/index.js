import React from 'react';
import {
  StyleSheet
} from 'react-native'
import MenuIcon from '../../Components/HomeHeaderIcons/Menu Icon'
import SearchIcon from '../../Components/HomeHeaderIcons/Search Icon'
import { createStackNavigator} from "react-navigation";
import MajorsScreen from '../MajorsScreen'
import Search from '../Search'
import LawyersScreen from '../LawyersScreen'
import { logo_text_colord } from '../../../assets'
import ImageIcon from '../../Components/Common/ImageIcon'

export default HomeStack = createStackNavigator(
  {
    Home: {
      screen: MajorsScreen,      
      navigationOptions: ({ navigation }) => ({
        headerRight: (
          <SearchIcon
            onPress={() => navigation.navigate('Search')}
            style={styles.searchIconStyle}
          />
        ),
        headerLeft: (
          <MenuIcon
            onPress={() => navigation.navigate('SideMenuStack')}
            style={styles.menuIconStyle}
          />
        ),
        //headerBackTitle: 'null',
        headerTitle: (
          <ImageIcon
            source={logo_text_colord}
            style={{
              width: 95,
              height: 26.5
              //backgroundColor: 'yellow'
            }}
          />
        ),
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          backgroundColor: '#f6f6f6'
        }
      })
    },
    Search: {
      screen: Search,
      navigationOptions: ({ navigation }) => ({
        headerRight: (
          <SearchIcon
            onPress={() => navigation.navigate('Search')}
            style={styles.searchIconStyle}
          />
        ),
        headerLeft: (
          <MenuIcon
            onPress={() => navigation.navigate('SideMenuStack')}
            style={styles.menuIconStyle}
          />
        ),
        //headerBackTitle: 'null',
        headerTitle: (
          <ImageIcon
            source={logo_text_colord}
            style={{
              width: 95,
              height: 26.5
              //backgroundColor: 'yellow'
            }}
          />
        ),
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          backgroundColor: '#f6f6f6'
        }
      })
    },
    LawyersScreen: {
      screen: LawyersScreen,
    }
  },
  {
    headerLayoutPreset: 'center',
    // defaultNavigationOptions: ({ navigation }) => ({
    //   headerRight: (
    //     <SearchIcon
    //       onPress={() => navigation.navigate('Search')}
    //       style={styles.searchIconStyle}
    //     />
    //   ),
    //   headerLeft: (
    //     <MenuIcon
    //       onPress={() => navigation.navigate('SideMenuStack')}
    //       style={styles.menuIconStyle}
    //     />
    //   ),
    //   //headerBackTitle: 'null',
    //   headerTitle: (
    //     <ImageIcon
    //       source={logo_text_colord}
    //       style={{
    //         width: 95,
    //         height: 26.5
    //         //backgroundColor: 'yellow'
    //       }}
    //     />
    //   ),
    //   headerStyle: {
    //     elevation: 0,
    //     shadowOpacity: 0,
    //     backgroundColor: '#f6f6f6'
    //   }
    // })
  }
)


const styles = StyleSheet.create({
  menuIconStyle : {
    width: 80,
    height: 50,
    //alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: 'red'
  },
  searchIconStyle: {
    width: 80,
    height: 50,
    //alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: 'red'
  }
})