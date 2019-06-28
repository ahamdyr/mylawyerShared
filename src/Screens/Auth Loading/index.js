import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  SafeAreaView,
  View,
} from 'react-native';
import {MAIN_COLOR} from '../../Components/Constants'
class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    //console.log('userToken',userToken)
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(true ? 'App' : 'Auth');
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