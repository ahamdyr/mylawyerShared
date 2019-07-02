import React from 'react';
import { StyleSheet, Text, View, FlatList, RefreshControl } from 'react-native';
import {WIDTH} from '../Constants'
import QuestionsItem from './QuestionsItem'
import StatusText from '../Common/StatusText'
import Spinner from '../../Screens/Spinner'
export default class QuestionsList extends React.PureComponent {
  
  renderItem = (item) => {
    return <QuestionsItem item={item} />
  }

  _keyExtractor = (item, index) => String(index)
  
  _renderFooter = () => {
    return (
      <View style={{
        height: 50,
        width: WIDTH,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {
          this.props.questionsNoMore ?
            <StatusText text={'No more..'} />
            : this.props.questionsLoadingMore ?
              <Spinner />
              : null
        }
      </View>
    )
  }
  renderQuestions = (questions, refresh, loadMore) => {
    return (
      <FlatList
        data={questions}
        //data={questions}
        keyExtractor={this._keyExtractor}
        renderItem={this.renderItem}
        //numColumns={2}
        //ItemSeparatorComponent={}
        scrollEnabled={true}
        onEndReached={()=>loadMore()}
        onEndReachedThreshold={0.2}
        ListFooterComponent={this._renderFooter}
        //ListHeaderComponent={this._renderHeader}
        refreshControl={
          <RefreshControl
            colors={['#0b7f7c']}
            refreshing={this.props.questionsLoading}
            onRefresh={()=>refresh()}
          />
        }
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
    var {
      questions, questionsLoading, refresh, loadMore
    } = this.props
    
    return (
      <View style={{
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#f6f6f6',
        alignItems: 'center',
        justifyContent: 'center',

      }}>
        {
          questions.length ?
            this.renderQuestions(questions, refresh, loadMore)
            : questionsLoading ?
              <Spinner/>
              : <StatusText text={'No Questions Found!'} />
        }
      </View>
    );
  }
}

