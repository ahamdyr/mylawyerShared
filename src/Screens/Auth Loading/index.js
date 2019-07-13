import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  SafeAreaView,
  View,
} from 'react-native';
import {MAIN_COLOR} from '../../Components/Constants'
import { getUserType, getUser } from '../../Services/AuthServices'
class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }
  _bootstrapAsync = async () => {
    await getUser()    
    //this.props.navigation.navigate(getUserType == 'user' ? 'UserApp' : 'LawyerApp');
  };

  // Render any loading content that you like here
  render() {
    return (
      <SafeAreaView style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <StatusBar translucent barStyle='dark-content' />
        <ActivityIndicator 
          size="large"
          color={MAIN_COLOR}
        />
      </SafeAreaView>
    );
  }
}
export default AuthLoadingScreen