import React from 'react';
import { StyleSheet, Text, View, FlatList, RefreshControl } from 'react-native';
import LawsItem from './LawsItem'

export default class LawsList extends React.Component {
  lawyers = [
    {
      MainPhotoURL:'https://i1.wp.com/theremba.com/wp-content/uploads/2018/05/taylor-grote-415993-unsplash-1-e1527710649885.jpg?ssl=1',
      Name:'Amir Fawzy',
      office : 'Offica A',
      rating:0
    },
    {
      MainPhotoURL:'https://i1.wp.com/theremba.com/wp-content/uploads/2018/05/taylor-grote-415993-unsplash-1-e1527710649885.jpg?ssl=1',
      Name:'Amir Fawzy',
      office:'Offica A',
      rating:1
    },
    {
      MainPhotoURL:'https://i1.wp.com/theremba.com/wp-content/uploads/2018/05/taylor-grote-415993-unsplash-1-e1527710649885.jpg?ssl=1',
      Name:'Amir Fawzy',
      office:'Offica A',
      rating:3
    },
    {
      MainPhotoURL:'https://i1.wp.com/theremba.com/wp-content/uploads/2018/05/taylor-grote-415993-unsplash-1-e1527710649885.jpg?ssl=1',
      Name:'Amir Fawzy',
      office:'Offica A',
      rating:5
    }
  ]
  renderItem = (item) => {
    return <LawsItem item={item}  />
  }

  _keyExtractor = (item, index) => String(index)

  renderLawyers = (lawyers) => {
    return(
      <FlatList
          data={lawyers}
          keyExtractor={this._keyExtractor}
          renderItem={this.renderItem}
          numColumns={2}
          scrollEnabled={true}
          //onEndReached={this._handleMore}
          onEndReachedThreshold={0.2}
          //ListFooterComponent={this._renderFooter}
          //ListHeaderComponent={this._renderHeader}
          // refreshControl={
          //   <RefreshControl
          //     colors={['#0b7f7c']}
          //     refreshing={this.state.refreshingProducts}
          //     onRefresh={this._handleRefresh}
          //   />
          // }
          style={{
            flex: 1,
            alignSelf: 'stretch'
          }}
        />
    )
  }

  render() {
    return (
      <View style={{
        flex: 1,
          alignSelf: 'stretch',
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
          paddingLeft:18.5,
          paddingRight:27.5
      }}>
        {this.renderLawyers(this.lawyers)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
    
  },
});