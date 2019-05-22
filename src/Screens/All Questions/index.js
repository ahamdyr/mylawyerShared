import React from 'react';
import { createStackNavigator} from "react-navigation";
import AllQuestionsScreen from '../AllQuestionsScreen'
import PublicQuestionScreen from '../Public Question Screen'

export default AllQuestionsStack = createStackNavigator({
  AllQuestions:{
    screen: AllQuestionsScreen,
  }
},{
  headerMode:'none'
});