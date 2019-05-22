import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import SelectComponent from '../../Components/QuestionsList/SelectComponent'
import BlackX from '../../Components/Common/BlackX'
import { STATUS_BAR_HEIGHT, WIDTH, MAIN_COLOR, HEIGHT } from '../../Components/Constants'
import QuestionComponent from '../../Components/QuestionComponents/Question'
import Footer from '../../Components/QuestionComponents/Footer'
import Attachments from '../../Components/QuestionComponents/Attachments'
export default class AskQuestion extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <BlackX
          onPress={() => this.props.navigation.goBack()}
        />

        <View style={styles.titleContainer}>
          <Text style={styles.Ask} >
            ASK
            </Text>
          <Text style={styles.titleText}>
            Any avaliable lawyer
            </Text>
        </View>

        <SelectComponent style={styles.select} />

        
          <QuestionComponent

          />
        
        {/* <Attachments style={{
          position: 'absolute',
          top: HEIGHT - 200
          }} /> */}
        <Footer />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //width: WIDTH,  
    backgroundColor: 'rgb(246, 246, 246)',
    flexDirection: 'column',
    //alignItems: 'center',
    // justifyContent: 'flex-start',
    marginTop: STATUS_BAR_HEIGHT
  },
  titleContainer: {
    marginTop: 10,
    width: 200,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Ask: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    color: MAIN_COLOR,
  },
  titleText: {
    fontFamily: 'Lato-Regular',
    fontSize: 12,
    color: 'rgba(19, 19, 20, 0.8)'
  },
  select: {
    backgroundColor: 'white',
    elevation: 10,
    shadowOpacity: 0.5,
    marginTop: 16
  },
  question: {
    marginTop: 16,
    marginRight: 16,
    marginLeft: 16,
    //height: 450,
    backgroundColor: 'white',
    elevation: 16,
    shadowOpacity: 0.5
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: WIDTH,
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 55,
    alignItems: 'center',
    justifyContent: 'space-around',
    elevation: 12,
    shadowOpacity: 0.8,
    shadowOffset: {
      height: -8,
      width: 0
    },
  },
  topic: {
    paddingBottom: 21,
    borderBottomWidth: 0.5,
    borderBottomColor: '#d5d5e0'
  },
  Attachments: {
    marginTop: 22.5,
    marginBottom: 31,
  },
  answered: {
    marginLeft: 16,
    marginTop: 31,
    marginBottom: 17,
  },
  textConatin: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  answer: {
    fontFamily: 'Cairo-Regular',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.11,
    color: '#131314',
    marginHorizontal: 16
  },
  closeIcon: {
    width: 16.5,
    height: 16.5,
    borderRadius: 0.8,
    position: 'absolute',
    top: 20,
    right: 16,
    left: 90
  }
});