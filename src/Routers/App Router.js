
import { createStackNavigator} from "react-navigation";
import {Home, About} from '../Screens'

const  AppRouter = createStackNavigator(
  {
    Home: Home,
    About : About
  },
  {
    initialRouteName:"Home"
  }
);

export default AppRouter