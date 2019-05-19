import React from './node_modules/react';
import {ActivityIndicator, View} from 'react-native';
import {MAIN_COLOR} from '../../Components/Constants'

export default class UserTypeModal extends React.PureComponent {

  render() {
    
    return (
      <View style={{
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      
      <ActivityIndicator
        size={"large"}
        color={MAIN_COLOR}
      />
      
      
      </View>

        
    );
  }
}

