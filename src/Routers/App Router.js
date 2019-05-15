
import {createAppContainer, createSwitchNavigator } from "react-navigation";
import MainRouter from './Main Router'
import AuthRouter from './Auth Router'
import {AuthLoading} from '../Screens'

const AppRouter = createSwitchNavigator({
  App : MainRouter,
  Auth : AuthRouter,
  AuthLoading : AuthLoading
},{
  initialRouteName:'App'
})

export default createAppContainer(AppRouter);

