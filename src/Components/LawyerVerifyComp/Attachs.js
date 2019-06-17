import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity
} from 'react-native';
import { WIDTH } from '../Constants'
import ImageIcon from '../Common/ImageIcon'
import {close3x} from '../../../assets'

export default class Attachs extends React.PureComponent {

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

  // _deleteItem = (item) => {
  //   if (item.type == 'doc') {
  //     this.props.delQuestionDoc(item)
  //   }
  //   else {
  //     this.props.delQuestionImg(item)
  //   }
  // }


  _renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Image
          source={{ uri: item.uri }}
          style={{
            width: 56,
            height: 56,
          }}
        />
        <Text 
          style={styles.nameStyle}
        >
          {item.name+'    added'}
        </Text>
        <TouchableOpacity
          style={styles.btnStyle}
          //onPress={() => this._deleteItem(item)}
        >
          <ImageIcon 
            style={styles.btnIconStyle}
            source={close3x}
          />
        </TouchableOpacity>
        
      </View>
    );
  };
  _keyExtractor = (item, index) => String(index)

  render() {
    var { attachs } = this.props
    return (
        <View style={styles.filesContainer}>
          <FlatList
            style={{ 
              height: 150, 
            }}
            data={this._list}
            scrollEnabled={true}
            renderItem={this._renderItem}
            ItemSeparatorComponent={() => <View style={{ marginBottom: 10 }} />}
            keyExtractor={this._keyExtractor}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  filesContainer: {
    width: WIDTH,
    justifyContent: 'flex-end',
    marginTop: 30,
    marginBottom: 10
  },
  nameStyle: {
    marginLeft: 10,
    fontFamily: "Lato-Bold",
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#ffffff"
  },
  btnStyle: {
    width: 25,
    height: 25,
    position: 'absolute',
    right: 0,    
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnIconStyle: {
    width: 23,
    height: 23,
  },
  itemContainer: {
    flexDirection: 'row',
    marginLeft: 15,
    marginRight: 25,
    alignItems: 'center'
  }
});
