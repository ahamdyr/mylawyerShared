import React from './node_modules/react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { styles } from './Styles'

class Updating extends React.Component {
  render() {

    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.loginText}>
          Updating...
        </Text>
      </SafeAreaView>
    );
  }
}

export default Updating