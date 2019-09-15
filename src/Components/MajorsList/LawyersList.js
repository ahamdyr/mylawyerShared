import React from 'react';
import { StyleSheet, Text, View, FlatList, RefreshControl } from 'react-native';
import LawsItem from '../Lawyers List/LawsItem'

export default class LawyersList extends React.Component {
  
  renderItem = ({item, index}) => {
    return <LawsItem item={item} index={index} />
  }

  _keyExtractor = (item, index) => String(index)

  renderLawyers = (lawyers) => {
    return(
      <FlatList
          data={lawyers}
          keyExtractor={this._keyExtractor}
          renderItem={this.renderItem}
          scrollEnabled={true}
          indicatorStyle={'white'}          
          ItemSeparatorComponent={() => <View style={{ margin: 8 }} />}
          onEndReachedThreshold={0.2}
          horizontal={true}
          style={{
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