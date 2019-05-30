import React from 'react';
import {View, StatusBar} from 'react-native';
import AppRouter from '../../Routers/App Router'
import { Provider } from 'react-redux'
import Store from '../../Redux/Store' 
// import {SafeAreaView} from 'react-navigation'
import {setTopLevelNavigator} from '../../Services/NavigationServices'
import { getUser } from '../../Services/AuthServices'
import axios from 'axios'

export default class AppContainer extends React.Component {
  async componentDidMount(){
    axios.defaults.baseURL = 'http://hlogicodesk.pythonanywhere.com'
    // delete backend database
    axios.get('https://hlogicodesk.pythonanywhere.com/api/beta/users/deldel/')
      .then(()=>console.log('data deleted'))
    // gte user from storage
    //await getUser()
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
      </View>
    </Provider>       
    );
  }
}

// for navigation persistence
//persistenceKey={"NavigationState"}