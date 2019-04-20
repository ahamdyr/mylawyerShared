import React from 'react';
import {View, StatusBar} from 'react-native';
import AppRouter from '../../Routers/App Router'
import { useScreens } from 'react-native-screens';
//import {SafeAreaView} from 'react-navigation'
useScreens();

export default class AppContainer extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <StatusBar          
           barStyle="light-content"
           backgroundColor="#000"
        />
        <AppRouter />
      </View>      
    );
  }
}

// for navigation persistence
//persistenceKey={"NavigationState"}