
import {createAppContainer, createStackNavigator } from "react-navigation";
import MainRouter from './Main Router'
import AuthRouter from './Auth Router'
import {AuthLoading} from '../Screens'

const AppRouter = createStackNavigator({
  App : MainRouter,
  Auth : AuthRouter,
  AuthLoading : AuthLoading
},{
  initialRouteName:'App',
  headerMode: "none"
})

export default createAppContainer(AppRouter);

