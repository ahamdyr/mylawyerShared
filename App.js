import React from 'react';
import { AppLoading, Asset, Updates } from 'expo';
import * as Font from 'expo-font'
import * as Icon from '@expo/vector-icons'
// import * as Sentry from 'sentry-expo';
import AppContainer from './src/Screens/App Container'
import Updating from "./src/Screens/Updating"
import { AppRegistry } from 'react-native';
import withExpoRoot from './node_modules/expo/build/launch/withExpoRoot'

class App extends React.Component {
  
  async componentWillMount() {
    if (!__DEV__) {
      this._checkForUpdates()
    }
    
    // Sentry.init({
    //   dsn: 'DSN',
    //   //enableInExpoDevelopment: true,
    //   debug: true
    // });
    // await Sentry.config('https://86ca025673d64ac7ab30c2f1a571a2c1@sentry.io/1498419').install();
  }
  state = {
    isLoadingComplete: false,
    updating: false,
  };
  render() {
    if (this.state.updating) {    
      return (<Updating visible={this.state.updating}/>)       
    }
    if (this.state.isLoadingComplete) {    
      return (<AppContainer />)       
    } else {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    }    
  }
  _checkForUpdates = async () => {
    let { isAvailable } = await Updates.checkForUpdateAsync()
    if(isAvailable){
      this.setState({ updating: true });
      await Updates.fetchUpdateAsync()
      Updates.reloadFromCache()
      //Updates.reload()
      this.setState({ updating: false });
    }
  }
  _loadResourcesAsync = async () => {
    return Promise.all([
      // Asset.loadAsync([
      //   require('./assets/images/robot-dev.png'),
      //   require('./assets/images/robot-prod.png'),
      // ]),
      Font.loadAsync({
        ...Icon.Ionicons.font,
        'LuxiSerif': require('./assets/fonts/luxirb.ttf'),
        'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
        'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
        'Cairo-Bold': require('./assets/fonts/Cairo-Bold.ttf'),
        'Cairo-Regular': require('./assets/fonts/Cairo-Regular.ttf'),
        'Lora-Regular' : require('./assets/fonts/Lora-Regular.ttf'),
        'Lato-Light': require('./assets/fonts/Lato-Light.ttf'),
        'Lato-Heavy': require('./assets/fonts/Lato-Heavy.ttf'),
        'NunitoSans-Bold': require('./assets/fonts/NunitoSans-Bold.ttf'),
        'NunitoSans-Regular': require('./assets/fonts/NunitoSans-Regular.ttf'),
        'NunitoSans-SemiBold': require('./assets/fonts/NunitoSans-SemiBold.ttf'),
        'Cairo-Black': require('./assets/fonts/Cairo-Black.ttf')
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}
export default AppRegistry.registerComponent('mylawyer', () => withExpoRoot(App));
// for navigation persistence
//persistenceKey={"NavigationState"}