import React from 'react';
import { Modal, Text, SafeAreaView, View, Alert, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { HEIGHT, MAIN_COLOR, WIDTH, STATUS_BAR_HEIGHT } from '../../Components/Constants'
import SocialBtns from '../../Components/Social Components/SocialBtns'
import { WhiteX } from '../../Components/Social Components/SocialBtns'
import { withNavigation } from 'react-navigation'

class SocialScreen extends React.Component {

  render() {
    const { navigation } = this.props
    return (
      <SafeAreaView style={{
        flex: 1,
        backgroundColor: 'transparent'
      }}>
        <View style={styles.container}>

          <Text style={styles.continue}>
            Continue with
          </Text>

          <SocialBtns />

          <TouchableOpacity
            activeOpacity={1}
            style={styles.termsContainer}
            onPress={() => navigation.navigate('TermsAndConditions')}
          >
            <Text style={styles.termsText}>
              By clicking Sign up you agree to our
            </Text>
            <Text
              style={[styles.termsText, { textDecorationLine: 'underline' }]}
            >
              Terms of Service
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={1}
            style={styles.footer}
            onPress={() => navigation.navigate('LoginWithPhone')}
          >
            <Text
              style={[styles.footerText, { textDecorationLine: 'underline' }]}
            >
              Already have an Account?
            </Text>
          </TouchableOpacity>

          <WhiteX
            style={styles.close}
            onPress={() => {
              navigation.goBack()
            }}
          />

        </View>
      </SafeAreaView>


    );
  }
}

export default withNavigation(SocialScreen)

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    height: 323,
    width: WIDTH,
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
    backgroundColor: '#EFEFEF',
    alignItems: 'center',
    //justifyContent: 'center',  
  },
  continue: {
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    letterSpacing: 0.35,
    color: 'rgb(19,19,20)',
    marginTop: 28,
  },
  close: {
    marginTop: 12
  },
  termsContainer: {
    marginTop: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  termsText: {
    fontFamily: 'Lato-Light',
    fontSize: 12,
    color: 'rgb(82, 82, 82)',
  },
  footerText: {
    fontFamily: 'Lato-Light',
    fontSize: 15,
    color: 'rgb(82, 82, 82)',
  },
});