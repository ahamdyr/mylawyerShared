import { call, put, takeEvery, select } from 'redux-saga/effects'
import {
  GET_Lawyer_All_QUESTIONS_REQUEST,
  SEARCH_Lawyer_All_QUESTIONS_REQUEST,
  FILTER_Lawyer_All_QUESTIONS_REQUEST,
  getLawyerAllQuestionsError,
  getLawyerAllQuestionsLoading,
  getLawyerAllQuestionsSuccess,
  setLawyerAllQuestionsPageToken,
  getLawyerAllQuestionsLoadingMore,
  getLawyerAllQuestionsNoMore  
} from './actions'
import {
  LawyerAllQuestionsApi
} from '../../Services/BackendServices/LawyerQuestionsServices'
import _ from 'lodash'

function* getLawyerAllQuestionsSaga(action) {
  try {
    var lastPageToken = yield select(state => state.LawyerAllQuestionsPageToken)
    var topicID = yield select(state => state.LawyerAllQuestionsFilterTopic)
    var query = yield select(state => state.LawyerAllQuestionsSearchQuery)
    var accessToken = yield select(state => state.accessToken)
    
    yield put(getLawyerAllQuestionsLoading(true))
    var {
      data,
      nextPageToken
    } = yield call(LawyerAllQuestionsApi, lastPageToken, accessToken, topicID, query)

    yield put(getLawyerAllQuestionsSuccess(data))
    yield put(getLawyerAllQuestionsLoading(false))
    if (!_.isUndefined(nextPageToken)) {
      yield put(setLawyerAllQuestionsPageToken(nextPageToken))
      yield put(getLawyerAllQuestionsNoMore(false))
    }
    else {
      yield put(getLawyerAllQuestionsNoMore(true))
    }
    
  } catch (error) {
    yield put(getLawyerAllQuestionsError(error))
    yield put(getLawyerAllQuestionsLoading(false))
    
    console.log('All questions error ',error)
  }
}
function* loadMoreLawyerAllQuestionsSaga(action) {
  try {
    var lastPageToken = yield select(state => state.LawyerAllQuestionsPageToken)
    var topicID = yield select(state => state.LawyerAllQuestionsFilterTopic)
    var query = yield select(state => state.LawyerAllQuestionsSearchQuery)
    var accessToken = yield select(state => state.accessToken)
    var noMore = yield select(state => state.getLawyerAllQuestionsNoMore)
    var lastData = yield select(state => state.getLawyerAllQuestionsSuccess)

    if (!noMore) {
      yield put(getLawyerAllQuestionsLoadingMore(true))
      var {
        data,
        nextPageToken
      } = yield call(LawyerAllQuestionsApi, lastPageToken, accessToken, topicID, query)
      var newData = [...lastData, ...data]
      yield put(getLawyerAllQuestionsSuccess(newData))
      yield put(getLawyerAllQuestionsLoadingMore(false))
      if (!_.isUndefined(nextPageToken)) {
        yield put(setLawyerAllQuestionsPageToken(nextPageToken))
      }
      else {
        yield put(getLawyerAllQuestionsNoMore(true))
      }
    }    
    
  } catch (error) {
    yield put(getLawyerAllQuestionsError(error))
    yield put(getLawyerAllQuestionsLoadingMore(false))
    
    console.log('search All questions error ',error)
  }
}

export function* getLawyerAllQuestions() {
  yield takeEvery([
    GET_Lawyer_All_QUESTIONS_REQUEST,
    SEARCH_Lawyer_All_QUESTIONS_REQUEST,
    FILTER_Lawyer_All_QUESTIONS_REQUEST
  ], getLawyerAllQuestionsSaga)
}
export function* loadMoreLawyerAllQuestions() {
  yield takeEvery([
    'getLawyerAllQuestionsLoadMore'
  ], loadMoreLawyerAllQuestionsSaga)
}