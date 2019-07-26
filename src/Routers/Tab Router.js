import React from 'react';
import { createBottomTabNavigator} from "react-navigation";
import {Home, AskQuestion, Questions} from '../Screens'
import HomeIcon from '../Components/BottomTabIcons/Home Icon'
import QuestionsIcon from '../Components/BottomTabIcons/Questions Icon'
import AskIcon from '../Components/BottomTabIcons/AskIcon'
import Store from '../Redux/Store'

const labelStyle = (focused) => {
  return {
    fontFamily: "Lato-Bold",
    fontSize: 12,
    letterSpacing: 0,
    color: focused ? '#0b7f7c' : '#9b9b9b',
    textAlign: "center",
    //marginBottom: 4,
  }
}

const  TabRouter = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
          title: "",
          tabBarIcon: ({focused}) => {
            return (
              <HomeIcon 
                onPress={()=>navigation.navigate('Home')}
                focused={focused}
              />
            )
          },
      })
    },
    AskQuestion : {
      screen: AskQuestion,
      navigationOptions: ({ navigation }) => ({
          title: "",
          tabBarVisible: false,
          tabBarIcon: ({focused}) => {
            return (
              <AskIcon
                onPress={() => {
                  Store.getState().isLoggedUser ?
                    navigation.navigate('AskQuestion')
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
          tabBarIcon: ({focused}) => {
            return (
              <QuestionsIcon 
                onPress={()=>navigation.navigate('MyQuestions')}
                focused={focused}
              />
            )
          },
      })
    }
  },
  {
    initialRouteName:"Home",
    //initialRouteName:"Questions",    
    tabBarOptions:{
      // showLabel:false,
      // showIcon:false
      //activeTintColor: '#222',
      //showLabel:true,
      
      tabStyle: {
        //height: 86,
        //backgroundColor: "red",
        backgroundColor: "#ffffff",
        shadowColor: "rgba(1, 11, 11, 0.29)",
        shadowOffset: {
          width: 1,
          height: -2
        },
        shadowRadius: 10,
        shadowOpacity: 1,
        //justifyContent: 'flex-start'
         //marginBottom:-7   //Padding 0 here
      },
        //activeBackgroundColor :'yellow',  //Doesn't work
    }
  }
);

export default TabRouter