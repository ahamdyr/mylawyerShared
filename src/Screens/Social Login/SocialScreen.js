import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class SocialScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          // position: 'absolute',
          // bottom: 0,
          // height: 200,
          
          backgroundColor: 'transparent',
          opacity: 0.5
        }}
      >
        <View style={{
          flex: 0,
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 100,
          backgroundColor: 'tomato', 
          }}
        >
          <Text>Modal!</Text>
          <Button
            title="Hide popup"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});