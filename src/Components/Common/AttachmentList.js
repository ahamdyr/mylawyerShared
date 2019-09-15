import React from 'react';
import { View, StyleSheet, FlatList, Text, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import {Linking} from 'expo'
import Spinner from '../../Screens/Spinner'
import Store from '../../Redux/Store'
import {
  delQuestionDoc,
  delQuestionImg
} from '../../Redux/AddQuestion/actions'

export default class AttachmentList extends React.PureComponent {
  _list = [
    {
      name: 'doc.1',
      uri: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80' 
    },
    {
      name: 'doc.1',
      uri: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80' 
    },
    {
      name: 'doc.1',
      uri: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80' 
    }
  ]
  _deleteItem = (item) => {
    if (item.type == 'document') {
      Store.dispatch(delQuestionDoc(item))
    }
    else {
      Store.dispatch(delQuestionImg(item))
    }
  }
  _renderItem = ({ item }) => {
    if (item.uri) {
      return (
        <View style={styles.itemContainer}>
          <TouchableOpacity
            style={styles.btnStyle}
            onPress={() => this._deleteItem(item)}
          >
            <Text style={styles.btnTxtStyle}>
              {'X'}
            </Text>
          </TouchableOpacity>
          <Image
            source={{ uri: item.uri }}
            style={{
              width: 120,
              height: 160,
              marginTop: 20
            }}
          />
        </View>
      )
    }
    else {
      return (
        <TouchableOpacity
          activeOpacity={1}
          onPress={()=> Linking.openURL(item.link)}
          style={styles.itemContainer}
        >
          <View style={styles.btnStyle}>
            <Text style={styles.btnTxtStyle}>
              {item.id}
            </Text>
          </View>
          <Image
            source={{ uri: item.link }}
            style={{
              width: 120,
              height: 160,
              marginTop: 20
            }}
          />
        </TouchableOpacity>
      );
    }    
  };
  _keyExtractor = (item, index)=> String(index)
  render() {
    var { attachs, attachsLoading } = this.props
    if(attachsLoading){
      return (<Spinner/>)
    }    
    if(!attachs.length){
      return (
        <View style={[styles.container, {
          alignItems: 'center',
          justifyContent: 'center',
        }]}>
          <Text style={{
            fontSize: 16,
            color: '#0b7f7c'
          }}>
            No Attachments Found!
        </Text>
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <FlatList
          style={{marginRight: 5}}
          //data={this._list}
          data={attachs}
          renderItem={this._renderItem}
          horizontal={true}
          ItemSeparatorComponent={() => <View style={{margin: 15}}/>}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnStyle:{
    width: 70,
    height: 40,
    borderRadius: 10,
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
  },
  itemContainer: {
    height: 240,
    width: 120,
    alignItems: 'center'
  }
});
