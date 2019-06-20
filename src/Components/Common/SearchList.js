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
import SeperatorLine from './SeperatorLine'
import ImageIcon from './ImageIcon'

export default class SearchList extends React.PureComponent {

  _list = [
    {
      id: 1,
      name: 'Amir Fawzy',
      office: 'Offica A',
      major: "financial",
      photo: 'https://i1.wp.com/theremba.com/wp-content/uploads/2018/05/taylor-grote-415993-unsplash-1-e1527710649885.jpg?ssl=1',
      rate: 3,
      bio: "Lorem Ipsum"
    },
    {
      id: 2,
      name: 'Amir Fawzy',
      office: 'Offica A',
      major: "financial",
      photo: 'https://i1.wp.com/theremba.com/wp-content/uploads/2018/05/taylor-grote-415993-unsplash-1-e1527710649885.jpg?ssl=1',
      rate: 1,
      bio: "Lorem Ipsum"
    },
    {
      id: 3,
      name: 'Amir Fawzy',
      office: 'Offica A',
      major: "financial",
      photo: 'https://i1.wp.com/theremba.com/wp-content/uploads/2018/05/taylor-grote-415993-unsplash-1-e1527710649885.jpg?ssl=1',
      rate: 0,
      bio: "Lorem Ipsum"
    },
    {
      id: 4,
      name: 'Amir Fawzy',
      office: 'Offica A',
      major: "financial",
      photo: 'https://i1.wp.com/theremba.com/wp-content/uploads/2018/05/taylor-grote-415993-unsplash-1-e1527710649885.jpg?ssl=1',
      rate: 5,
      bio: "Lorem Ipsum"
    },
  ]


  _renderItem = ({ item }) => {
    return (
      <TouchableOpacity 
        style={styles.itemContainer}
        //onPress={}
      > 
        <ImageIcon
          style={styles.image}
          source={{uri:item.photo}}
        />
        <Text 
          style={styles.nameStyle}
        >
          {item.name}
        </Text>
        
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
            ItemSeparatorComponent={() => <SeperatorLine style={styles.lineStyle}/>}
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
    //marginTop: 30,
    //marginBottom: 10,
    alignSelf: 'center',
  },
  image:{
    width: 48,
    height: 48,
    borderRadius: 24
  },
  nameStyle: {
    marginLeft: 16,    
    fontFamily: "Lato-Bold",
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "normal",
    fontStyle: "normal",
    letterSpacing: 0.4,
    color: "#131314"
  },
  lineStyle: {
    width: WIDTH,
    //marginHorizontal: 16,
    height: 1,
    backgroundColor: "#d5d5e0"
  },
  itemContainer: {
    flexDirection: 'row',
    //width: WIDTH,
    alignItems: 'center',
    //justifyContent: 'space-between',
    height: 80,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 16,
  }
});
