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
import SeperatorLine from '../Common/SeperatorLine'
export default class MajorsList extends React.PureComponent {

  _list = [
    {
      id: 1,
      name: 'finance',
    },
    {
      id: 2,
      name: 'finance',
    },
    {
      id: 3,
      name: 'finance',
    },
    {
      id: 4,
      name: 'finance',
    },
  ]


  _renderItem = ({ item }) => {
    return (
      <TouchableOpacity 
        style={styles.itemContainer}
        //onPress={}
      >
        <Text 
          style={styles.nameStyle}
        >
          {item.name}
        </Text>
        <SeperatorLine 
          style={styles.lineStyle}
        />
      </TouchableOpacity>
    );
  };
  _keyExtractor = (item, index) => String(index)

  render() {
    var { attachs } = this.props
    return (
        <View style={styles.majorsContainer}>
          <FlatList
            style={{ 
              //flex: 1 
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
  majorsContainer: {
    flex: 1 ,
    //width: WIDTH,
    marginTop: 30,
    //marginBottom: 10,
    alignSelf: 'center',
  },
  nameStyle: {
    marginLeft: 10,
    marginBottom: 10,
    fontFamily: "Lato-Regular",
    fontSize: 16,
    //fontWeight: "500",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#ffffff"
  },
  lineStyle: {
    height: 1,
    opacity: 0.2,
    backgroundColor: "#ffffff",
    width: WIDTH-30,
  },
  itemContainer: {
    width: WIDTH-30,
    // marginLeft: 15,
    // marginRight: 15,
    //alignItems: 'center'
  }
});
