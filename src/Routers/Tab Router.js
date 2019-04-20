import React from 'react';
import { Feather as Icon } from 'react-native-vector-icons'
import { createBottomTabNavigator} from "react-navigation";
import {Home, AskQuestion, MyQuestions} from '../Screens'

const  TabRouter = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
          title: "Home",
          tabBarIcon: ({ tintColor }) => (
              <Icon
                  name={"home"}
                  size={17}
                  color={tintColor} />
          )
      }
    },
    AskQuestion : {
      screen: AskQuestion,
      navigationOptions: {
          title: "Ask Question",
          tabBarIcon: ({ tintColor }) => (
              <Icon
                  name={"home"}
                  size={17}
                  color={tintColor} />
          )
      }
    },
    MyQuestions: {
      screen: MyQuestions,
      navigationOptions: {
          title: "My Questions",
          tabBarIcon: ({ tintColor }) => (
              <Icon
                  name={"home"}
                  size={17}
                  color={tintColor} />
          )
      }
    }
  },
  {
    initialRouteName:"Home"
  }
);

export default TabRouter