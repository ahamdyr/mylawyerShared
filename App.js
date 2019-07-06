import React from 'react';
import { AppLoading, Asset, Font, Icon, Updates } from 'expo';
import Sentry from 'sentry-expo';
import AppContainer from './src/Screens/App Container'
export default class App extends React.Component {
  
  async componentDidMount() {
    if (!__DEV__) {
      this._checkForUpdates()
    }
    // Remove this once Sentry is correctly setup.
    Sentry.enableInExpoDevelopment = true;

    await Sentry.config('https://86ca025673d64ac7ab30c2f1a571a2c1@sentry.io/1498419').install();
  }
  state = {
    isLoadingComplete: false,
  };
  render() {
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
      Updates.reload()
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
        'Lato-Light': require('./assets/fonts/Lato-Light.ttf')
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

// for navigation persistence
//persistenceKey={"NavigationState"}