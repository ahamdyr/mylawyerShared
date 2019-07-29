import React from 'react';
import { createBottomTabNavigator } from "react-navigation";
import AllQuestionsTabs from './AllQuestionsTabs'
import MyQuestionsTabs from './MyQuestionsTabs'
import SideMenu from '../Screens/SideMenu'
import HomeIcon from '../Components/BottomTabIcons/Home Icon'
import QuestionsIcon from '../Components/BottomTabIcons/Questions Icon'
import SettingsIcon from '../Components/BottomTabIcons/SettingsIcon'
import { WIDTH, OS } from '../Components/Constants'

const Style = [
  {
    height: 68,
    width: WIDTH - 30,
    borderRadius: 34,
    backgroundColor: "#ffffff",
    //backgroundColor: "red",
    shadowColor: "rgba(1, 11, 11, 0.29)",
    shadowOffset: {
      width: 1,
      height: -2
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    elevation: 16,
  },
  OS == 'ios' ? 
    {
      position: 'absolute',
      left: 15,
      right: 0,
      bottom: 19,
      zIndex: 1,
    }
    : 
    {    
      alignSelf: 'center',
      marginBottom: 19,
    }
]

const TabBar = createBottomTabNavigator(
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
      screen: SideMenu,
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
    tabBarOptions: {
      style: Style
    },

  }
);

export default TabBar