import React from 'react';
import { View, StyleSheet, Platform, Dimensions } from "react-native"
import { createBottomTabNavigator } from "react-navigation";
import AllQuestionsTabs from './AllQuestionsTabs'
import MyQuestionsTabs from './MyQuestionsTabs'
import SideMenuStack from '../Routers/SideMenuStack'
import HomeIcon from '../Components/BottomTabIcons/Home Icon'
import QuestionsIcon from '../Components/BottomTabIcons/Questions Icon'
import SettingsIcon from '../Components/BottomTabIcons/SettingsIcon'
import { WIDTH, OS } from '../Components/Constants'
import { BottomTabBar } from "react-navigation-tabs"

const TabBarComponent = (props) => (<BottomTabBar {...props} />)

const { height, width } = Dimensions.get('window')
const isSafeAreaSupported = Platform.OS === 'ios' && (height > 800 || width > 800)

export default TabBar = createBottomTabNavigator(
  {
    AllQuestionsTabs: {
      screen: AllQuestionsTabs,
      navigationOptions: ({ navigation }) => ({
        title: "",
        tabBarIcon: ({ focused }) => {
          return (
            <HomeIcon
              onPress={() => navigation.navigate('AllQuestionsTabs')}
              focused={focused}
            />
          )
        },
      })
    },
    MyQuestionsTabs: {
      screen: MyQuestionsTabs,
      navigationOptions: ({ navigation }) => ({
        title: "",
        tabBarIcon: ({ focused }) => {
          return (
            <QuestionsIcon
              onPress={() => navigation.navigate('MyQuestionsTabs')}
              focused={focused}
            />
          )
        },
      })
    },
    LawyerSettings: {
      screen: SideMenuStack,
      navigationOptions: ({ navigation }) => ({
        title: "",        
        tabBarIcon: ({ focused }) => {
          return (
            <SettingsIcon
              onPress={() => navigation.navigate('SideMenu')}
              focused={focused}
            />
          )
        },
      })
    }
  },
  {
    tabBarComponent: props => {
      if (isSafeAreaSupported) {
        return (<TabBarComponent {...props} />)
      }
      else {
        return (
          <View style={styles.BarContainer}>
            <TabBarComponent {...props} />
          </View>
        )
      }
    },
    tabBarOptions: {   
      style: isSafeAreaSupported ? 
        {
          height: 68,
          width: WIDTH - 30,
          borderRadius: 34,
          backgroundColor: "#ffffff",
          shadowColor: "rgba(1, 11, 11, 0.29)",
          shadowOffset: {
            width: 1,
            height: -2
          },
          shadowRadius: 10,
          shadowOpacity: 1,
          elevation: 16,
          justifyContent: 'center',
          alignSelf: 'center',
          position: 'absolute',
          bottom: isSafeAreaSupported ? 65 : 19,
        }
        : {
            height: 68,
            width: WIDTH - 30,
            borderRadius: 34,
            backgroundColor: "#ffffff",
            shadowColor: "rgba(1, 11, 11, 0.29)",
            shadowOffset: {
              width: 1,
              height: -2
            },
            shadowRadius: 10,
            shadowOpacity: 1,
            elevation: 16,
            justifyContent: 'center',
            // alignSelf: 'center',
            // position: 'absolute',
            // bottom: isSafeAreaSupported ? 65 : 19,
        }
    }
  }
);

const styles = StyleSheet.create({
  BarContainer: {
    //backgroundColor: "red",
    position: 'absolute',
    bottom: isSafeAreaSupported ? 65 : 19,
    width: WIDTH,
    height: 68,
    alignItems: 'center',
  },
})