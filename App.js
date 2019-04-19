import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './src/Routers/App Container'
export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}


//persistenceKey={"NavigationState"}