import React from 'react';
import { createStackNavigator} from "react-navigation";
import MyQuestionsScreen from '../MyQuestionsScreen'

export default MyQuestionsStack = createStackNavigator({
  MyQuestions:{
    screen: MyQuestionsScreen,
  }
},{
  headerMode:'none'
});