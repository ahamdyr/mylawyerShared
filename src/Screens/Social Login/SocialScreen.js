import React from 'react';
import {Modal, Text, TouchableHighlight, View, Alert, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';
import {HEIGHT, MAIN_COLOR, WIDTH, STATUS_BAR_HEIGHT} from '../../Components/Constants'
export default class SocialScreen extends React.PureComponent {


  componentWillUnmount(){
  }
  render() {
    const {socialModalOpen, closeSocialModal, openSocialModal} = this.props
    return (
      <View style={{
        flex: 1,
        backgroundColor: 'transparent'
      }}>

        <View style={styles.container}>
          <Text>
            aknajhhbfdsf
              </Text>
        </View>
        
      </View>
      

    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    height: 273,
    width: WIDTH,
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
    backgroundColor: '#EFEFEF',
    alignItems: 'center',
    //justifyContent: 'center',  
  },
  
  
});