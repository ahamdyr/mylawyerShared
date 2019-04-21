import React from 'react';
import {Text} from 'react-native'
import { Feather as Icon } from 'react-native-vector-icons'
import { createBottomTabNavigator} from "react-navigation";
import {Home, AskQuestion, MyQuestions} from '../Screens'
import HomeIcon from '../Components/Home Icon'
import QuestionsIcon from '../Components/Questions Icon'
import AskIcon from '../Components/Ask Icon'
import MenuIcon from '../Components/Menu Icon';

const  TabRouter = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
          title: "",
          tabBarIcon: ({ tintColor }) => (<HomeIcon onPress={() =>navigation.navigate('Home')}/>),
          // tabBarLabel:({focused}) => (
          //   <Text 
          //     style={{alignSelf:'baseline'}}       
          //   >
          //     {focused?'____':''}
          //   </Text>
          // )
      })
    },
    AskQuestion : {
      screen: AskQuestion,
      navigationOptions: ({ navigation }) => ({
          title: "",
          //tabBarButtonComponent: () => (<QuestionsIcon/>),
          tabBarIcon: ({ tintColor }) => (<AskIcon onPress={() =>navigation.navigate('AskQuestion')}/>),
          // tabBarLabel:({focused}) => (
          //   <Text 
          //     style={{alignSelf:'center'}}          
          //   >
          //     {focused?'____':''}
          //   </Text>
          // )
      })
    },
    MyQuestions: {
      screen: MyQuestions,
      navigationOptions: ({ navigation }) => ({
          title: "",
          tabBarIcon: ({ tintColor }) => (<QuestionsIcon onPress={() =>navigation.navigate('MyQuestions')}/>),
          // tabBarLabel:({focused}) => (
          //   <Text 
          //     style={{alignSelf:'center'}}          
          //   >
          //     {focused?'____':''}
          //   </Text>
          // )
      })
    }
  },
  {
    initialRouteName:"Home",
    
    // tabBarOptions:{
    //   showLabel:false,
    //   showIcon:false
    // }
  }
);

export default TabRouter