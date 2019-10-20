import { createMaterialTopTabNavigator } from "react-navigation";
import NewQuestionsScreen from '../LawyerScreens/NewQuestionsScreen'
import AllQuestionsScreen from '../LawyerScreens/AllQuestionsScreen'
import { STATUS_BAR_HEIGHT, WIDTH } from '../Components/Constants'

export default  AllQuestionsTabs = createMaterialTopTabNavigator({

  NewQuestionsScreen : {
    screen: NewQuestionsScreen,
    //params: {data:'All Questions'},
    navigationOptions: ({ navigation }) => ({
      title:'New Questions'
    }),
  },
  AllQuestionsScreen : {
    screen: AllQuestionsScreen,
    //params: {data:'My Questions'},
    navigationOptions: ({ navigation }) => ({
      title:'All Questions'
    }),
  }
},{
  //swipeEnabled :false,
  //animationEnabled :false,
  lazy:true,
  tabBarOptions :{
    style :{      
      marginTop: STATUS_BAR_HEIGHT,
      backgroundColor:'#f6f6f6',
      height: 55 ,
    },
    activeTintColor : '#0b7f7c',
    inactiveTintColor : '#9e9ea3',
    indicatorStyle :{
      backgroundColor:'#0b7f7c'
    },
    tabStyle: {
      width: WIDTH/2
    },
    labelStyle:{
      fontFamily: 'Lato-Regular',
      fontSize: 18,
      alignContent: 'center',
      paddingBottom: 13.5,
      //paddingTop: 33.5 -  STATUS_BAR_HEIGHT
    },
    upperCaseLabel : false
  },  
})