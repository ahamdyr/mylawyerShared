import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar, Image } from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        
        
        <Text>Home!</Text>
        
        <Button
          title="Go to Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />

        <Button
          title="Open Drawer"
          onPress={() => this.props.navigation.toggleDrawer()}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});