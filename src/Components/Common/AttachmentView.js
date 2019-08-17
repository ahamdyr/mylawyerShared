import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, TouchableWithoutFeedback } from "react-native";
import {WIDTH} from '../Constants'
import * as DocumentPicker from 'expo-document-picker';
import AttachmentList from './AttachmentList'
export default class AttachmentView extends React.PureComponent {

  _uploadFile = async () =>{
    let doc = await DocumentPicker.getDocumentAsync()
    // doc.name = '+201007121821.jpg'
     //console.log('doc',doc)
  }
  render(){
    return(
      <View style={styles.container}>
        {/* <View style={styles.btnsContainer}>
          <TouchableOpacity onPress={this._uploadFile}>
            <View
              style={styles.btnStyle}
            >
              <Text style={styles.btnTxtStyle}>
                Upload
              </Text>
            </View>
            
          </TouchableOpacity>
        </View> */}
        <View style={styles.filesContainer}>
          <AttachmentList attachs={this.props.attachs} attachsLoading={this.props.attachsLoading} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    width:WIDTH,
    height: 281.5,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    borderBottomWidth: 0.5,
    borderBottomColor: '#d5d5e0'
  },
  btnsContainer:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: WIDTH,
    height: 99
  },
  filesContainer:{
    //flexDirection:'row',
    //width: WIDTH,
    height: 240,
    marginLeft: 16,
    marginTop: 24
  },
  btnStyle:{
    width: 87.5,
    height: 49,
    borderRadius: 4,
    backgroundColor: '#0b7f7c',
    elevation: 12,
    shadowRadius: 12,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOpacity: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTxtStyle:{
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    color: 'white'
  }
})