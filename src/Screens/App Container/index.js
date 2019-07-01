import React from 'react';
import {View, StatusBar, SafeAreaView } from 'react-native';
import AppRouter from '../../Routers/App Router'
import { Provider } from 'react-redux'
import Store from '../../Redux/Store' 
import {setTopLevelNavigator} from '../../Services/NavigationServices'
import { getUser, setPhoneCredentials } from '../../Services/AuthServices'
import { KeyboardAccessoryNavigation } from 'react-native-keyboard-accessory';
import axios from 'axios'

export default class AppContainer extends React.Component {
  async componentWillMount(){
    axios.defaults.baseURL = `https://hlogicodesk.pythonanywhere.com/api/beta/`
    // delete backend database
    // axios.get('https://hlogicodesk.pythonanywhere.com/api/beta/users/deldel/')
    //   .then(()=>console.log('data deleted'))
    // gte user from storage
    await getUser()
    await setPhoneCredentials()
  }
  render() {
    return (
    <Provider store={Store}>
      <View style={{ flex: 1 }}>
        <StatusBar translucent barStyle={'dark-content'} />
        <AppRouter 
          ref={navigatorRef =>{
            setTopLevelNavigator(navigatorRef)
          }}
        />
        {/* <KeyboardAccessoryNavigation
        avoidKeyboard={true}
        nextDisabled={true}
        previousDisabled={true}
        nextHidden={true}
        previousHidden={true}
      /> */}
        
      </View>
    </Provider>       
    );
  }
}

// for navigation persistence
//persistenceKey={"NavigationState"}