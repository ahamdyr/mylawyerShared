import React from 'react';
import AppContainer from './src/Screens/App Container'
export default class App extends React.Component {
  render() {
    return (<AppContainer />)
  }
}

// for navigation persistence
//persistenceKey={"NavigationState"}