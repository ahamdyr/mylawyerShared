import { createMaterialTopTabNavigator } from "react-navigation";
import MyQuestions from '../My Questions'
import AllQuestions from '../All Questions'


export default  QuestionsTabs = createMaterialTopTabNavigator({
  AllQuestions : {
    screen: AllQuestions,
    params: {data:'All Questions'}
  },
  MyQuestions : {
    screen: MyQuestions,
    params: {data:'My Questions'}
  }
},{

})