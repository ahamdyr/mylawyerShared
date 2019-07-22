import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert, Platform } from 'react-native';
import { WIDTH } from '../Constants'
import Ask from './Ask Icon'
import { navigate, goBack } from '../../Services/NavigationServices'
import HomeIcon from "./Home Icon";
import QuestionIcon from "./Questions Icon";

export default class TabBarComponent extends React.PureComponent {


  render() {
    return (
      <View style={styles.footer}>
        <HomeIcon
            onPress={()=>navigate('Home')}
            style={styles.cameratIconContainer}
            //focused={true}
        />
        <Ask
          onPress={()=>navigate('AskQuestion')}
        />
        <QuestionIcon
          onPress={()=>navigate('Questions')}
          style={styles.cameratIconContainer}
          //focused={true}
        />
          

      </View>

    )
  }
}

const styles = StyleSheet.create({
  footer: {
    // position: 'absolute',
    // bottom: 0,
    alignSelf: 'flex-end',
    height: 55,
    width: WIDTH,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    elevation: 12,
    shadowColor: "#00000014",
    shadowOffset: {
      width: 0,
      height: -16
    },
    shadowRadius: 24,
    shadowOpacity: 1
  },
  attachmentIcon: {
    width: 21,
    height: 21,
    //color: MAIN_COLOR,
    //marginTop: 10
  },
  cameratIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',    
    width: 50,
    height: 50,
    //backgroundColor: 'red'
  },
  cameratIcon: {
    width: 22,
    height: 20,
    //color: MAIN_COLOR,
    //marginTop: 20
  }
})