import React from 'react';
import { createBottomTabNavigator} from "react-navigation";
import AllQuestionsTabs from './AllQuestionsTabs'
import MyQuestionsTabs from './MyQuestionsTabs'
import HomeIcon from '../Components/BottomTabIcons/Home Icon'
import QuestionsIcon from '../Components/BottomTabIcons/Questions Icon'

const  TabBar = createBottomTabNavigator(
  {
    AllQuestionsTabs: {
      screen: AllQuestionsTabs,
      navigationOptions: ({ navigation }) => ({
          title: "",
          tabBarIcon: ({focused}) => (<HomeIcon 
            focused={focused} 
            //onPress={() =>navigation.navigate('Home')}
            />),
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
    MyQuestionsTabs: {
      screen: MyQuestionsTabs,
      navigationOptions: ({ navigation }) => ({
          title: "",
          tabBarIcon: ({focused}) => (<QuestionsIcon 
            focused={focused} 
            //onPress={() =>navigation.navigate('MyQuestions')}
          />),
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
    //initialRouteName:"AllQuestionsTabs",
    //initialRouteName:"Questions",
    tabBarOptions:{
      // showLabel:false,
      // showIcon:false
      //activeTintColor: '#222',
      //showLabel:true,
      
      tabStyle: {
         marginBottom:-7,   //Padding 0 here
         backgroundColor: "#f6f6f6"
      },
        //activeBackgroundColor :'yellow',  //Doesn't work
    }
  }
);

export default TabBar