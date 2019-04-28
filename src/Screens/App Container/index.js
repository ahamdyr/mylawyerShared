import React from 'react';
import {View, StatusBar} from 'react-native';
import AppRouter from '../../Routers/App Router'
import { useScreens } from 'react-native-screens';
import { Provider } from 'react-redux'
//import {configureStore} from '../../Redux/Store' 
//import {SafeAreaView} from 'react-navigation'
useScreens();
//const Store = configureStore()
export default class AppContainer extends React.Component {
  render() {
    return (
      // <Provider store={Store}>
        <AppRouter />
      // </Provider>
      // <View style={{flex:1}}>
      //   <StatusBar          
      //      barStyle="light-content"
      //      backgroundColor="#000"
      //   />
        
      // </View>      
    );
  }
}

// for navigation persistence
//persistenceKey={"NavigationState"}