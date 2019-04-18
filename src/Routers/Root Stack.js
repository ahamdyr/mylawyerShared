
import { createStackNavigator} from "react-navigation";
import * as Screens from '../Screens'

export default StackNavigator = createStackNavigator(
  {
  Home: Screens.Home,
  About : Screens.About
  },
  {
    initialRouteName:"Home"
  }
);

