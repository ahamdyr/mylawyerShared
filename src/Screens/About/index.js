import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import Constants from 'expo-constants'
import { STATUS_BAR_HEIGHT } from '../../Components/Constants'
import { aboutUs } from '../../Services/BackendServices/MockData'
import { WhiteX } from '../../Components/Social Components/SocialBtns'
import { navigate, goBack } from '../../Services/NavigationServices'
export default class About extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>My Lawyer</Text>
        <Text style={styles.content}>{aboutUs}</Text>
        {!__DEV__ && <Text style={styles.version}>Version {Constants.manifest.version}</Text>}
        <WhiteX onPress={() => goBack()}/>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 40 + STATUS_BAR_HEIGHT,
    paddingBottom: 24
  },
  title: {
    //marginTop: 59 + STATUS_BAR_HEIGHT,
    fontFamily: 'LuxiSerif',
    fontSize: 24.3,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#0b7f7c'
  },
  content: {
    //marginTop: 66,
    width: 311,
    fontFamily: 'Lato-Regular',
    fontSize: 18,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#0b7f7c'
  },
  version: {
    //marginTop: 20,
    width: 311,
    fontFamily: 'Lato-Regular',
    fontSize: 18,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#0b7f7c'
  },
  close: {
    position: 'absolute',
    bottom: 24
  }
})
