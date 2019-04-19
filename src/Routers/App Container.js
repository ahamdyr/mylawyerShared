
import {createAppContainer, createSwitchNavigator } from "react-navigation";
import AppRouter from './App Router'
import AuthRouter from './Auth Router'
import {AuthLoading} from '../Screens'

const AppContainer = createSwitchNavigator({
  App : AppRouter,
  Auth : AuthRouter,
  AuthLoading : AuthLoading
},{
  initialRouteName:'AuthLoading'
})

export default createAppContainer(AppContainer);

