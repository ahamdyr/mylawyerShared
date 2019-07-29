import React from 'react';
import { createBottomTabNavigator } from "react-navigation";
import AllQuestionsTabs from './AllQuestionsTabs'
import MyQuestionsTabs from './MyQuestionsTabs'
import SideMenu from '../Screens/SideMenu'
import HomeIcon from '../Components/BottomTabIcons/Home Icon'
import QuestionsIcon from '../Components/BottomTabIcons/Questions Icon'
import SettingsIcon from '../Components/BottomTabIcons/SettingsIcon'

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
    //initialRouteName:"AllQuestionsTabs",
    //initialRouteName:"Questions",
    tabBarOptions: {
      // showLabel:false,
      // showIcon:false
      //activeTintColor: '#222',
      //showLabel:true,

      tabStyle: {
        //marginBottom: 3,   //Padding 0 here
        backgroundColor: "#ffffff",
        shadowColor: "rgba(1, 11, 11, 0.29)",
        shadowOffset: {
          width: 1,
          height: -2
        },
        shadowRadius: 10,
        shadowOpacity: 1
      },
      //activeBackgroundColor :'yellow',  //Doesn't work
    }
  }
);

export default TabBar