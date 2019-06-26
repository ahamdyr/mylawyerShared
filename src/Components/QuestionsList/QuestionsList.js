import React from 'react';
import { StyleSheet, Text, View, FlatList, RefreshControl } from 'react-native';
import QuestionsItem from './QuestionsItem'

export default class QuestionsList extends React.Component {
  
  renderItem = (item) => {
    return <QuestionsItem item={item} />
  }

  _keyExtractor = (item, index) => String(index)

  renderQuestions = (questions) => {
    return (
      <FlatList
        data={questions}
        //data={this.props.questions}
        keyExtractor={this._keyExtractor}
        renderItem={this.renderItem}
        //numColumns={2}
        //ItemSeparatorComponent={}
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
          // paddingLeft:18.5,
          // paddingRight:27.5,
          backgroundColor: '#f6f6f6'
        }}
      />
    )
  }

  render() {
    if (!this.props.questions.length) {
      return (<View style={{
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#f6f6f6',
        alignItems: 'center',
        justifyContent: 'center',

      }}>
        <Text style={{
          fontSize: 16,
          color: '#0b7f7c'
        }}>
          No Questions Found!
        </Text>
      </View>)
    }
    return (
      <View style={{
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#f6f6f6',
        alignItems: 'center',
        justifyContent: 'center',

      }}>
        {this.renderQuestions(this.props.questions)}
      </View>
    );
  }
}