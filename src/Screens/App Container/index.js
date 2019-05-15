import React from 'react';
import {View, StatusBar} from 'react-native';
import AppRouter from '../../Routers/App Router'
import { useScreens } from 'react-native-screens';
import { Provider } from 'react-redux'
import SocialScreen from '../Social Login'
import Store from '../../Redux/Store' 
import {SafeAreaView} from 'react-navigation'

useScreens();

export default class AppContainer extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <View style={{ flex: 1 }}>
        <StatusBar translucent barStyle={'light-content'}/>
        <SocialScreen />
          <AppRouter />
          
        </View>
      </Provider>       
    );
  }
}

// for navigation persistence
//persistenceKey={"NavigationState"}