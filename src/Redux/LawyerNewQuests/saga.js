import { call, put, takeEvery, select } from 'redux-saga/effects'
import {
  GET_Lawyer_New_QUESTIONS_REQUEST,
  SEARCH_Lawyer_New_QUESTIONS_REQUEST,
  FILTER_Lawyer_New_QUESTIONS_REQUEST,
  getLawyerNewQuestionsError,
  getLawyerNewQuestionsLoading,
  getLawyerNewQuestionsSuccess,
  setLawyerNewQuestionsPageToken,
  getLawyerNewQuestionsLoadingMore,
  getLawyerNewQuestionsNoMore  
} from './actions'
import {
  LawyerNewQuestionsApi
} from '../../Services/BackendServices/LawyerQuestionsServices'
import _ from 'lodash'

function* getLawyerNewQuestionsSaga(action) {
  try {
    var lastPageToken = yield select(state => state.LawyerNewQuestionsPageToken)
    var topicID = yield select(state => state.LawyerNewQuestionsFilterTopic)
    var query = yield select(state => state.LawyerNewQuestionsSearchQuery)
    var accessToken = yield select(state => state.accessToken)
    
    yield put(getLawyerNewQuestionsLoading(true))
    var {
      data,
      nextPageToken
    } = yield call(LawyerNewQuestionsApi, lastPageToken, accessToken, topicID, query)

    yield put(getLawyerNewQuestionsSuccess(data))
    yield put(getLawyerNewQuestionsLoading(false))
    if (!_.isUndefined(nextPageToken)) {
      yield put(setLawyerNewQuestionsPageToken(nextPageToken))
      yield put(getLawyerNewQuestionsNoMore(false))
    }
    else {
      yield put(getLawyerNewQuestionsNoMore(true))
    }
    
  } catch (error) {
    yield put(getLawyerNewQuestionsError(error))
    yield put(getLawyerNewQuestionsLoading(false))
    
    console.log('New questions error ',error)
  }
}
function* loadMoreLawyerNewQuestionsSaga(action) {
  try {
    var lastPageToken = yield select(state => state.LawyerNewQuestionsPageToken)
    var topicID = yield select(state => state.LawyerNewQuestionsFilterTopic)
    var query = yield select(state => state.LawyerNewQuestionsSearchQuery)
    var accessToken = yield select(state => state.accessToken)
    var noMore = yield select(state => state.getLawyerNewQuestionsNoMore)
    var lastData = yield select(state => state.getLawyerNewQuestionsSuccess)

    if (!noMore) {
      yield put(getLawyerNewQuestionsLoadingMore(true))
      var {
        data,
        nextPageToken
      } = yield call(LawyerNewQuestionsApi, lastPageToken, accessToken, topicID, query)
      var newData = [...lastData, ...data]
      yield put(getLawyerNewQuestionsSuccess(newData))
      yield put(getLawyerNewQuestionsLoadingMore(false))
      if (!_.isUndefined(nextPageToken)) {
        yield put(setLawyerNewQuestionsPageToken(nextPageToken))
      }
      else {
        yield put(getLawyerNewQuestionsNoMore(true))
      }
    }    
    
  } catch (error) {
    yield put(getLawyerNewQuestionsError(error))
    yield put(getLawyerNewQuestionsLoadingMore(false))
    
    console.log('search New questions error ',error)
  }
}

export function* getLawyerNewQuestions() {
  yield takeEvery([
    GET_Lawyer_New_QUESTIONS_REQUEST,
    SEARCH_Lawyer_New_QUESTIONS_REQUEST,
    FILTER_Lawyer_New_QUESTIONS_REQUEST
  ], getLawyerNewQuestionsSaga)
}
export function* loadMoreLawyerNewQuestions() {
  yield takeEvery([
    'getLawyerNewQuestionsLoadMore'
  ], loadMoreLawyerNewQuestionsSaga)
}