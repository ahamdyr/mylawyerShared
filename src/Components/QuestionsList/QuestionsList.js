import React from 'react';
import { StyleSheet, Text, View, FlatList, RefreshControl } from 'react-native';
import QuestionsItem from './QuestionsItem'

export default class QuestionsList extends React.Component {
  questions = [
    {
      MainPhotoURL:'https://i1.wp.com/theremba.com/wp-content/uploads/2018/05/taylor-grote-415993-unsplash-1-e1527710649885.jpg?ssl=1',
      authorName:'Emma Brown',
      qIndex: 1,
      content: "الشيك بدون رصيد وإشكالياته وكيفية مواجهته في النظام السعودي",
      answeredBy : 'Lawyer1',
      answerDate : ''
    },
    {
      MainPhotoURL:'https://i1.wp.com/theremba.com/wp-content/uploads/2018/05/taylor-grote-415993-unsplash-1-e1527710649885.jpg?ssl=1',
      authorName:'Emma Brown',
      qIndex: 1,
      content: "الشيك بدون رصيد وإشكالياته وكيفية مواجهته في النظام السعودي",
      answeredBy : 'Lawyer1',
      answerDate : ''
    },
    {
      MainPhotoURL:'https://i1.wp.com/theremba.com/wp-content/uploads/2018/05/taylor-grote-415993-unsplash-1-e1527710649885.jpg?ssl=1',
      authorName:'Emma Brown',
      qIndex: 1,
      content: "الشيك بدون رصيد وإشكالياته وكيفية مواجهته في النظام السعودي",
      answeredBy : 'Lawyer1',
      answerDate : ''
    }
  ]
  renderItem = (item) => {
    return <QuestionsItem item={item}  />
  }

  _keyExtractor = (item, index) => String(index)

  renderQuestions = (questions) => {
    return(
      <FlatList
          data={questions}
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
        {this.renderQuestions(this.questions)}
      </View>
    );
  }
}