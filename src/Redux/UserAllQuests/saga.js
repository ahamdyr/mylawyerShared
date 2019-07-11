import { call, put, takeEvery, select } from 'redux-saga/effects'
import {
  GET_USER_ALL_QUESTIONS_REQUEST,
  SEARCH_USER_ALL_QUESTIONS_REQUEST,
  FILTER_USER_ALL_QUESTIONS_REQUEST,
  getUserAllQuestionsError,
  getUserAllQuestionsLoading,
  getUserAllQuestionsSuccess,
  getUserAllQuestionsLoadingMore,
  getUserAllQuestionsNoMore,
  setUserAllQuestionsPageToken,  
} from './actions'
import {
  UserAllQuestionsApi
} from '../../Services/BackendServices/UserAllQuestionsServices'
import { goBack, navigate } from '../../Services/NavigationServices'
import _ from 'lodash'

function* getUserAllQuestionsSaga(action) {
  var lastPageToken = yield select(state => state.UserAllQuestionsPageToken)
  var topicID = yield select(state => state.allQuestionsFilterTopic)
  var query = yield select(state => state.allQuestionsSearchQuery)

  try {
    //navigate('Spinner')
    yield put(getUserAllQuestionsLoading(true))
    if(topicID){
      var {
        data,
        nextPageToken
      } = yield call(UserAllQuestionsApi, lastPageToken, topicID, query)
    }else{
      var {
        data,
        nextPageToken
      } = yield call(searchUserAllQuestionsApi, lastPageToken, topicID, query)
    }
    yield put(getUserAllQuestionsSuccess(data))
    yield put(getUserAllQuestionsLoading(false))
    if (!_.isUndefined(nextPageToken)) {
      yield put(setUserAllQuestionsPageToken(nextPageToken))
      yield put(getUserAllQuestionsNoMore(false))
    }
    else {
      yield put(getUserAllQuestionsNoMore(true))
    }
    //goBack()
  } catch (error) {
    yield put(getUserAllQuestionsError(error))
    yield put(getUserAllQuestionsLoading(false))
    //goBack()
    console.log('all questions error ', error)
  }
}


function* loadMoreUserAllQuestionsSaga(action) {
  try {
    var lastPageToken = yield select(state => state.UserAllQuestionsPageToken)
    var topicID = yield select(state => state.allQuestionsFilterTopic)
    var query = yield select(state => state.allQuestionsSearchQuery)
    var noMore = yield select(state => state.getUserAllQuestionsNoMore)
    var lastData = yield select(state => state.getUserAllQuestionsSuccess)
    
    if(!noMore){      
      yield put(getUserAllQuestionsLoadingMore(true))
      if(topicID){
        var {
          data,
          nextPageToken
        } = yield call(UserAllQuestionsApi, lastPageToken, topicID, query)
      }else{
        var {
          data,
          nextPageToken
        } = yield call(searchUserAllQuestionsApi, lastPageToken, topicID, query)        
      }
      var newData = [...lastData, ...data]
      yield put(getUserAllQuestionsSuccess(newData))
      yield put(getUserAllQuestionsLoadingMore(false))
      if (!_.isUndefined(nextPageToken)) {
        yield put(setUserAllQuestionsPageToken(nextPageToken))
      }
      else {
        yield put(getUserAllQuestionsNoMore(true))
      }
    }
  } catch (error) {
    yield put(getUserAllQuestionsError(error))
    yield put(getUserAllQuestionsLoadingMore(false))
    console.log('search questions error ', error)
  }   
}

export function* getUserAllQuestions() {
  yield takeEvery([
    GET_USER_ALL_QUESTIONS_REQUEST,
    SEARCH_USER_ALL_QUESTIONS_REQUEST,
    FILTER_USER_ALL_QUESTIONS_REQUEST
  ], getUserAllQuestionsSaga)
}

export function* loadMoreUserAllQuestions() {
  yield takeEvery([
    'getUserAllQuestionsLoadMore'
  ], loadMoreUserAllQuestionsSaga)
}