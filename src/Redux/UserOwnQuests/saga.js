import { call, put, takeEvery, select } from 'redux-saga/effects'
import {
  GET_USER_OWN_QUESTIONS_REQUEST,
  SEARCH_USER_OWN_QUESTIONS_REQUEST,
  FILTER_USER_OWN_QUESTIONS_REQUEST,
  getUserOwnQuestionsError,
  getUserOwnQuestionsLoading,
  getUserOwnQuestionsSuccess,
  setUserOwnQuestionsPageToken,
  getUserOwnQuestionsLoadingMore,
  getUserOwnQuestionsNoMore  
} from './actions'
import {
  searchUserOwnQuestionsApi
} from '../../Services/BackendServices/UserOwnQuestsServices'
import _ from 'lodash'

function* getUserOwnQuestionsSaga(action) {
  try {
    var lastPageToken = yield select(state => state.UserOwnQuestionsPageToken)
    var topicID = yield select(state => state.myQuestionsFilterTopic)
    var query = yield select(state => state.myQuestionsSearchQuery)
    var accessToken = yield select(state => state.accessToken)
    
    yield put(getUserOwnQuestionsLoading(true))
    var {
      data,
      nextPageToken
    } = yield call(searchUserOwnQuestionsApi, lastPageToken, accessToken, topicID, query)

    yield put(getUserOwnQuestionsSuccess(data))
    yield put(getUserOwnQuestionsLoading(false))
    if (!_.isUndefined(nextPageToken)) {
      yield put(setUserOwnQuestionsPageToken(nextPageToken))
    }
    else {
      yield put(getUserOwnQuestionsNoMore(true))
    }
    
  } catch (error) {
    yield put(getUserOwnQuestionsError(error))
    yield put(getUserOwnQuestionsLoading(false))
    
    console.log('own questions error ',error)
  }
}
function* loadMoreUserOwnQuestionsSaga(action) {
  try {
    var lastPageToken = yield select(state => state.UserOwnQuestionsPageToken)
    var topicID = yield select(state => state.myQuestionsFilterTopic)
    var query = yield select(state => state.myQuestionsSearchQuery)
    var accessToken = yield select(state => state.accessToken)
    var noMore = yield select(state => state.getUserOwnQuestionsNoMore)
    var lastData = yield select(state => state.getUserOwnQuestionsSuccess)

    if (!noMore) {
      yield put(getUserOwnQuestionsLoadingMore(true))
      var {
        data,
        nextPageToken
      } = yield call(searchUserOwnQuestionsApi, lastPageToken, accessToken, topicID, query)
      var newData = [...lastData, ...data]
      yield put(getUserOwnQuestionsSuccess(newData))
      yield put(getUserOwnQuestionsLoadingMore(false))
      if (!_.isUndefined(nextPageToken)) {
        yield put(setUserOwnQuestionsPageToken(nextPageToken))
      }
      else {
        yield put(getUserOwnQuestionsNoMore(true))
      }
    }    
    
  } catch (error) {
    yield put(getUserOwnQuestionsError(error))
    yield put(getUserOwnQuestionsLoadingMore(false))
    
    console.log('search own questions error ',error)
  }
}

export function* getUserOwnQuestions() {
  yield takeEvery([
    GET_USER_OWN_QUESTIONS_REQUEST,
    SEARCH_USER_OWN_QUESTIONS_REQUEST,
    FILTER_USER_OWN_QUESTIONS_REQUEST
  ], getUserOwnQuestionsSaga)
}
export function* loadMoreUserOwnQuestions() {
  yield takeEvery([
    'getUserOwnQuestionsLoadMore'
  ], loadMoreUserOwnQuestionsSaga)
}