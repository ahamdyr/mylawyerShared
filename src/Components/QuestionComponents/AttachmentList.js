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
      this.props.delQuestionDoc(item)
    }
    else {
      this.props.delQuestionImg(item)
    }
  }


  _renderItem = ({ item }) => {
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
    );
  };
  _keyExtractor = (item, index) => String(index)

  render() {
    var { attachs } = this.props
    return (
      <View style={styles.container}>

        <View style={styles.filesContainer}>
          <FlatList
            style={{ marginRight: 5 }}
            data={attachs}
            renderItem={this._renderItem}
            horizontal={true}
            ItemSeparatorComponent={() => <View style={{ margin: 15 }} />}
            keyExtractor={this._keyExtractor}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: 281.5,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    borderBottomWidth: 0.5,
    borderBottomColor: '#d5d5e0'
  },
  filesContainer: {
    height: 240,
    marginLeft: 16,
    marginTop: 24
  },
  btnStyle: {
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
  btnTxtStyle: {
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
