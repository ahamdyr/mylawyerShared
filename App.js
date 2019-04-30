import React from 'react';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppContainer from './src/Screens/App Container'
export default class App extends React.Component {

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
        'Cairo-Regular': require('./assets/fonts/Cairo-Regular.ttf')
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