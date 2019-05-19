import React from 'react';
import {View, StatusBar} from 'react-native';
import AppRouter from '../../Routers/App Router'
// import { useScreens } from 'react-native-screens';
import { Provider } from 'react-redux'
import Store from '../../Redux/Store' 
import {SafeAreaView} from 'react-navigation'
import {setTopLevelNavigator} from '../../Services/NavigationServices'
import {setLoggedUser} from '../../Redux/Auth/actions'
import {AsyncStorage} from 'react-native'
// useScreens();

export default class AppContainer extends React.Component {
  async componentDidMount(){
    let userToken = await AsyncStorage.getItem('userToken')
    if(userToken){
      Store.dispatch(setLoggedUser(true))
    }
    else{
      Store.dispatch(setLoggedUser(false))
    }
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