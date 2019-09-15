import React from 'react';
import { View, StatusBar, SafeAreaView } from 'react-native';
import AppRouter from '../../Routers/App Router'
import { Provider } from 'react-redux'
import Store from '../../Redux/Store'
import { setTopLevelNavigator } from '../../Services/NavigationServices'
import { getUser, setPhoneCredentials } from '../../Services/AuthServices'
import axios from 'axios'
import { KeyboardAccessoryNavigation } from 'react-native-keyboard-accessory';
import FlashMessage from "react-native-flash-message";
import { showMessage } from "react-native-flash-message";

global.showMessage = showMessage
// developement url
//global.baseURL = `https://hlogicodesk.pythonanywhere.com/api/beta/`
//axios.defaults.baseURL = `https://hlogicodesk.pythonanywhere.com/api/beta/`
// production url
global.baseURL = `http://api.mylawyer-app.com/beta/`
axios.defaults.baseURL = `http://api.mylawyer-app.com/beta/`

export default class AppContainer extends React.Component {
  async componentWillMount() {
    // delete backend database
    // axios.get('https://hlogicodesk.pythonanywhere.com/api/beta/users/deldel/')
    //   .then(()=>console.log('data deleted'))
    // gte user from storage
    //await getUser()
    setPhoneCredentials()
  }
  render() {
    return (
      <Provider store={Store}>
        {/* <SafeAreaView style={{ flex: 1, backgroundColor: '#f6f6f6' }}> */}
        <View style={{ flex: 1, backgroundColor: '#f6f6f6' }}>
          <AppRouter
            ref={navigatorRef => {
              setTopLevelNavigator(navigatorRef)
            }}
          />
          <FlashMessage position="top" />
        {/* </SafeAreaView> */}
        </View>
      </Provider>
    );
  }
}

// for navigation persistence
//persistenceKey={"NavigationState"}