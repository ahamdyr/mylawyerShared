import { call, put, takeEvery, select } from 'redux-saga/effects'
import {
  GET_Lawyer_Locked_QUESTIONS_REQUEST,
  SEARCH_Lawyer_Locked_QUESTIONS_REQUEST,
  FILTER_Lawyer_Locked_QUESTIONS_REQUEST,
  getLawyerLockedQuestionsError,
  getLawyerLockedQuestionsLoading,
  getLawyerLockedQuestionsSuccess,
  setLawyerLockedQuestionsPageToken,
  getLawyerLockedQuestionsLoadingMore,
  getLawyerLockedQuestionsNoMore  
} from './actions'
import {
  LawyerLockedQuestionsApi
} from '../../Services/BackendServices/LawyerQuestionsServices'
import _ from 'lodash'

function* getLawyerLockedQuestionsSaga(action) {
  try {
    var lastPageToken = yield select(state => state.LawyerLockedQuestionsPageToken)
    var topicID = yield select(state => state.LawyerLockedQuestionsFilterTopic)
    var query = yield select(state => state.LawyerLockedQuestionsSearchQuery)
    var accessToken = yield select(state => state.accessToken)
    
    yield put(getLawyerLockedQuestionsLoading(true))
    var {
      data,
      nextPageToken
    } = yield call(LawyerLockedQuestionsApi, lastPageToken, accessToken, topicID, query)

    yield put(getLawyerLockedQuestionsSuccess(data))
    yield put(getLawyerLockedQuestionsLoading(false))
    if (!_.isUndefined(nextPageToken)) {
      yield put(setLawyerLockedQuestionsPageToken(nextPageToken))
      yield put(getLawyerLockedQuestionsNoMore(false))
    }
    else {
      yield put(getLawyerLockedQuestionsNoMore(true))
    }
    
  } catch (error) {
    yield put(getLawyerLockedQuestionsError(error))
    yield put(getLawyerLockedQuestionsLoading(false))
    
    console.log('Locked questions error ',error)
  }
}
function* loadMoreLawyerLockedQuestionsSaga(action) {
  try {
    var lastPageToken = yield select(state => state.LawyerLockedQuestionsPageToken)
    var topicID = yield select(state => state.LawyerLockedQuestionsFilterTopic)
    var query = yield select(state => state.LawyerLockedQuestionsSearchQuery)
    var accessToken = yield select(state => state.accessToken)
    var noMore = yield select(state => state.getLawyerLockedQuestionsNoMore)
    var lastData = yield select(state => state.getLawyerLockedQuestionsSuccess)

    if (!noMore) {
      yield put(getLawyerLockedQuestionsLoadingMore(true))
      var {
        data,
        nextPageToken
      } = yield call(LawyerLockedQuestionsApi, lastPageToken, accessToken, topicID, query)
      var newData = [...lastData, ...data]
      yield put(getLawyerLockedQuestionsSuccess(newData))
      yield put(getLawyerLockedQuestionsLoadingMore(false))
      if (!_.isUndefined(nextPageToken)) {
        yield put(setLawyerLockedQuestionsPageToken(nextPageToken))
      }
      else {
        yield put(getLawyerLockedQuestionsNoMore(true))
      }
    }    
    
  } catch (error) {
    yield put(getLawyerLockedQuestionsError(error))
    yield put(getLawyerLockedQuestionsLoadingMore(false))
    
    console.log('search Locked questions error ',error)
  }
}

export function* getLawyerLockedQuestions() {
  yield takeEvery([
    GET_Lawyer_Locked_QUESTIONS_REQUEST,
    SEARCH_Lawyer_Locked_QUESTIONS_REQUEST,
    FILTER_Lawyer_Locked_QUESTIONS_REQUEST
  ], getLawyerLockedQuestionsSaga)
}
export function* loadMoreLawyerLockedQuestions() {
  yield takeEvery([
    'getLawyerLockedQuestionsLoadMore'
  ], loadMoreLawyerLockedQuestionsSaga)
}