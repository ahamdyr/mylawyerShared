import React from 'react';
import {ActivityIndicator, View, SafeAreaView} from 'react-native';
import {MAIN_COLOR} from '../../Components/Constants'

export default class Spinner extends React.PureComponent {

  render() {
    
    return (
      <SafeAreaView style={{
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      
      <ActivityIndicator
        size={"large"}
        color={MAIN_COLOR}
      />
      
      
      </SafeAreaView>

        
    );
  }
}

