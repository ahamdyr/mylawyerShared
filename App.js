import React from 'react';
import AppContainer from './src/Screens/App Container'
import SplashScreen from 'react-native-splash-screen'

export default class App extends React.Component {

  componentDidMount() {
    SplashScreen.hide()
  }
  render() {
    return <AppContainer />
  }
}