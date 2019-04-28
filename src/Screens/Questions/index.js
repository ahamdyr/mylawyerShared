import { createMaterialTopTabNavigator } from "react-navigation";
import MyQuestions from '../My Questions'
import AllQuestions from '../All Questions'
import {Constants} from 'expo'
import { Dimensions } from "react-native";

const statusBarHeight = Constants.statusBarHeight
const {height, width} = Dimensions.get('window')

export default  QuestionsTabs = createMaterialTopTabNavigator({

  AllQuestions : {
    screen: AllQuestions,
    params: {data:'All Questions'},
    navigationOptions: ({ navigation }) => ({
      title:'All Questions'
    }),
  },
  MyQuestions : {
    screen: MyQuestions,
    params: {data:'My Questions'},
    navigationOptions: ({ navigation }) => ({
      title:'My Questions'
    }),
  }
},{
  //swipeEnabled :false,
  //animationEnabled :false,
  //lazy:false,
  tabBarOptions :{
    style :{      
      marginTop: statusBarHeight,
      backgroundColor:'#f6f6f6',
      height: 46 + statusBarHeight ,
    },
    activeTintColor : '#0b7f7c',
    inactiveTintColor : '#9e9ea3',
    indicatorStyle :{
      backgroundColor:'#0b7f7c'
    },
    tabStyle: {
      width: width/2
    },
    labelStyle:{
      fontFamily: 'Lato-Regular',
      fontSize: 18,
      alignContent: 'center',
      paddingBottom: 13.5,
      paddingTop: 33.5 -  statusBarHeight
    },
    upperCaseLabel : false
  },  
})