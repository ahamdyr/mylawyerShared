import React from 'react';
import {Modal, Text, TouchableHighlight, View, Alert, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';
import {HEIGHT, MAIN_COLOR, WIDTH, STATUS_BAR_HEIGHT} from '../../Components/Constants'
export default class SocialScreen extends React.PureComponent {

  // static navigationOptions = ()=>{
  //   return {
  //     layout: {
  //       backgroundColor: 'transparent',
  //   },
  //   screenBackgroundColor: 'transparent',
  //   modalPresentationStyle: 'overCurrentContext',
  //   };
  // }

  componentWillUnmount(){
    this.props.closeSocialModal()
  }
  render() {
    const {socialModalOpen, closeSocialModal, openSocialModal} = this.props
    return (
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={socialModalOpen}
        onRequestClose={() => {
          closeSocialModal()
        }}
        closeOnClick
      >
        <View 
          style = {{
            flex:1,
            marginTop: STATUS_BAR_HEIGHT,
            backgroundColor: 'rgba(0,0,0,0.3)',
          }}
        >
          <View style={styles.container}>
            <Text>
              aknajhhbfdsf
              </Text>
          </View>
          <TouchableOpacity
              style={styles.shadowBack}
              onPress={()=>closeSocialModal()}
              activeOpacity={0.8}
            />
        </View>
          
      </Modal>

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
  shadowBack: {
    marginTop: 100,
    width: WIDTH,
    height: HEIGHT,
    //alignSelf: 'stretch',
    backgroundColor: 'transparent',

  },
  barStyle:{

  }
  
});