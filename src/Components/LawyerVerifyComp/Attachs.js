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

  _deleteItem = (item) => {
    this.props.delete(item)
  }

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
          onPress={() => this._deleteItem(item)}
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
    var { data } = this.props
    return (
        <View style={styles.filesContainer}>
          <FlatList
            style={{ 
              marginRight: 10 
            }}
            data={data}
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
    height: 150,
    marginTop: 10,
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
    right: 15,    
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
    //marginRight: 25,
    alignItems: 'center'
  }
});
