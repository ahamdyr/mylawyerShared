import React from 'react';
import { StyleSheet, Text, View, FlatList, RefreshControl } from 'react-native';
import LawyersList from './LawyersList'
import { goBack, navigate } from '../../Services/NavigationServices'

export default class MajorsList extends React.Component {

  renderItem = ({ item, index }) => {
    var { id, name, lawyers } = item
    return (
      <View style={styles.majorContainer}>
        <Text 
          style={styles.majorTitle}
          onPress={()=>navigate('LawyersScreen', { lawyers: lawyers })}
        >
          {name}
        </Text>
        <LawyersList lawyers={lawyers} />
      </View>
    )
  }

  _keyExtractor = (item, index) => String(index)

  renderMajors = (majors) => {
    return (
      <FlatList
        data={majors}        
        keyExtractor={this._keyExtractor}
        renderItem={this.renderItem}
        scrollEnabled={true}
        //onEndReached={this._handleMore}
        ItemSeparatorComponent={() => <View style={{ marginBottom: 8 }} />}
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
          // paddingLeft:23,
          // paddingRight:23,
          backgroundColor: '#f6f6f6'
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
        {this.renderMajors(this.props.majors)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {


  },
  majorContainer: {

  },
  majorTitle: {
    marginRight: 30,
    marginTop: 25,
    fontFamily: "Cairo-Black",
    fontSize: 20,
    letterSpacing: 0,
    textAlign: "right",
    color: "#131314"
  },
});