import { createMaterialTopTabNavigator } from "react-navigation";
import LockedQuestionsScreen from '../LawyerScreens/LockedQuestionsScreen'
import SolvedQuestionsScreen from '../LawyerScreens/SolvedQuestionsScreen'
import {Constants} from 'expo'
import { Dimensions } from "react-native";

const statusBarHeight = Constants.statusBarHeight
const {height, width} = Dimensions.get('window')

export default  MyQuestionsTabs = createMaterialTopTabNavigator({

  LockedQuestionsScreen : {
    screen: LockedQuestionsScreen,
    //params: {data:'All Questions'},
    navigationOptions: ({ navigation }) => ({
      title:'Locked Questions'
    }),
  },
  SolvedQuestionsScreen : {
    screen: SolvedQuestionsScreen,
    //params: {data:'My Questions'},
    navigationOptions: ({ navigation }) => ({
      title:'Solved Questions'
    }),
  }
},{
  //swipeEnabled :false,
  //animationEnabled :false,
  lazy:true,
  tabBarOptions :{
    style :{      
      marginTop: statusBarHeight,
      backgroundColor:'#f6f6f6',
      height: 55 ,
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
      //paddingTop: 33.5 -  statusBarHeight
    },
    upperCaseLabel : false
  },  
})