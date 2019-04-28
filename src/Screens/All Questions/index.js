import React from 'react';
import { createStackNavigator} from "react-navigation";
import AllQuestionsScreen from '../AllQuestionsScreen'

export default AllQuestionsStack = createStackNavigator({
  AllQuestions:{
    screen: AllQuestionsScreen,
  }
},{
  headerMode:'none'
});