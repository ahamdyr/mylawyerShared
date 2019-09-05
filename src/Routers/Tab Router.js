import React from 'react';
import { createBottomTabNavigator } from "react-navigation";
import { Home, AskQuestion, Questions } from '../Screens'
import HomeIcon from '../Components/BottomTabIcons/Home Icon'
import QuestionsIcon from '../Components/BottomTabIcons/Questions Icon'
import AskIcon from '../Components/BottomTabIcons/AskIcon'
import Store from '../Redux/Store'

const TabRouter = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        title: "",
        tabBarIcon: ({ focused }) => {
          return (
            <HomeIcon
              onPress={() => navigation.navigate('Home')}
              focused={focused}
            />
          )
        },
      })
    },
    AskQuestion: {
      screen: AskQuestion,
      navigationOptions: ({ navigation }) => ({
        title: "",
        tabBarVisible: false,
        tabBarIcon: ({ focused }) => {
          return (
            <AskIcon
              onPress={() => {
                Store.getState().isLoggedUser ?
                  navigation.navigate('AskQuestion', {lawyer: null})
                  : navigation.navigate('SocialScreen')
              }}
            />
          )
        },
      })
    },
    Questions: {
      screen: Questions,
      navigationOptions: ({ navigation }) => ({
        title: "",
        tabBarIcon: ({ focused }) => {
          return (
            <QuestionsIcon
              onPress={() => navigation.navigate('MyQuestions')}
              focused={focused}
            />
          )
        },
      })
    }
  },
  {
    initialRouteName: "Home",
    //initialRouteName:"Questions",    
    tabBarOptions: {
      style: {
        height: 60,
        //backgroundColor: "red",
        backgroundColor: "#ffffff",
        shadowColor: "rgba(1, 11, 11, 0.29)",
        shadowOffset: {
          width: 1,
          height: -2
        },
        shadowRadius: 10,
        shadowOpacity: 1,
        elevation: 16,
      },
    }
  }
);

export default TabRouter