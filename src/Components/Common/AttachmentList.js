import React from 'react';
import { View, StyleSheet, FlatList, Text, Image, TouchableWithoutFeedback } from 'react-native';
import {Linking} from 'expo'
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
  _renderItem = ({ item }) => {
    return (
      <TouchableWithoutFeedback
        onPress={()=> Linking.openURL(item.link)}
        style={{
          
          // justifyContent: 'space-between',
          height: 240,
          width: 120
        }}>
        <View style={{flex:1, alignItems: 'center',}}>
        <View
          style={styles.btnStyle}
        >
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
        </View>  
      </TouchableWithoutFeedback>
    );
  };
  _keyExtractor = (item, index)=> String(index)
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={{marginRight: 5}}
          //data={this._list}
          data={this.props.attachs}
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
  }
});
