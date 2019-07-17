import React from 'react';
import { StyleSheet, Text, View, FlatList, RefreshControl } from 'react-native';
import LawsItem from './LawsItem'

  export default class LawsList extends React.Component {
  
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
            alignSelf: 'stretch',
            paddingLeft:23,
            paddingRight:23,
            backgroundColor:'#f6f6f6'
          }}
        />
    )
  }

  render() {
    return (
      <View style={{
        flex: 1,
          alignSelf: 'stretch',
          backgroundColor: '#f6f6f6',
          alignItems: 'center',
          justifyContent: 'center',
          
      }}>
        {this.renderLawyers(this.props.lawyers)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
    
  },
});