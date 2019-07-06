import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { styles } from './Styles'

class Updating extends React.Component {
  render() {

    return (
      <SafeAreaView style={styles.container}>
        <Spinner
          visible={this.props.visible}
          textContent={'Updating...'}
          textStyle={styles.loginText}
        />
        {/* <Text style={styles.loginText}>
          Updating...
        </Text> */}
      </SafeAreaView>
    );
  }
}

export default Updating