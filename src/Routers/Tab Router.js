import React from 'react';
import {Text} from 'react-native'
import { Feather as Icon } from 'react-native-vector-icons'
import { createBottomTabNavigator} from "react-navigation";
import {Home, AskQuestion, Questions} from '../Screens'
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
          tabBarIcon: ({focused}) => (<HomeIcon focused={focused} onPress={() =>navigation.navigate('Home')}/>),
          // tabBarLabel:({focused}) => (
            
          //     focused?
          //     <Text style={{
          //       marginBottom:4,
          //       fontWeight:'bold',
          //       color:'#0b7f7c',
          //       fontSize: 16
          //     }}>___________</Text>
          //     :null
               
          // )
      })
    },
    AskQuestion : {
      screen: AskQuestion,
      navigationOptions: ({ navigation }) => ({
          title: "",
          //tabBarButtonComponent: () => (<QuestionsIcon/>),
          tabBarIcon: ({focused}) => (<AskIcon onPress={() =>navigation.navigate('AskQuestion')}/>),
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
      screen: Questions,
      navigationOptions: ({ navigation }) => ({
          title: "",
          tabBarIcon: ({focused}) => (<QuestionsIcon focused={focused} onPress={() =>navigation.navigate('MyQuestions')}/>),
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
    
    tabBarOptions:{
      // showLabel:false,
      // showIcon:false
      //activeTintColor: '#222',
      //showLabel:true,
      
      tabStyle: {
         marginBottom:-7   //Padding 0 here
      },
        //activeBackgroundColor :'yellow',  //Doesn't work
    }
  }
);

export default TabRouter