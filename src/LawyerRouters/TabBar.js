import React from 'react';
import { createBottomTabNavigator } from "react-navigation";
import AllQuestionsTabs from './AllQuestionsTabs'
import MyQuestionsTabs from './MyQuestionsTabs'
import SideMenuStack from '../Routers/SideMenuStack'
import HomeIcon from '../Components/BottomTabIcons/Home Icon'
import QuestionsIcon from '../Components/BottomTabIcons/Questions Icon'
import SettingsIcon from '../Components/BottomTabIcons/SettingsIcon'
import { WIDTH, OS } from '../Components/Constants'
import { View, StyleSheet } from "react-native"
import { BottomTabBar } from "react-navigation-tabs"

const TabBarComponent = (props) => (<BottomTabBar {...props} />)

const styles = {
  Tab_Bar_Style: {
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
  BarContainer: {
    position: 'absolute',
    left: 15,
    right: 0,
    bottom: 19,
  },
}

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
              onPress={() => navigation.navigate('SideMenuStack')}
              focused={focused}
            />
          )
        },
      })
    }
  },
  {
    tabBarComponent: props => {
      return (
        <View style={styles.BarContainer}>
          <TabBarComponent {...props} />
        </View>
      )
    },
    tabBarOptions: {
      style: styles.Tab_Bar_Style
    }
  }
);