import { call, put, takeEvery, select } from 'redux-saga/effects'
import {
  GET_Lawyer_Solved_QUESTIONS_REQUEST,
  SEARCH_Lawyer_Solved_QUESTIONS_REQUEST,
  FILTER_Lawyer_Solved_QUESTIONS_REQUEST,
  getLawyerSolvedQuestionsError,
  getLawyerSolvedQuestionsLoading,
  getLawyerSolvedQuestionsSuccess,
  setLawyerSolvedQuestionsPageToken,
  getLawyerSolvedQuestionsLoadingMore,
  getLawyerSolvedQuestionsNoMore  
} from './actions'
import {
  LawyerSolvedQuestionsApi
} from '../../Services/BackendServices/LawyerQuestionsServices'
import _ from 'lodash'

function* getLawyerSolvedQuestionsSaga(action) {
  try {
    var lastPageToken = yield select(state => state.LawyerSolvedQuestionsPageToken)
    var topicID = yield select(state => state.LawyerSolvedQuestionsFilterTopic)
    var query = yield select(state => state.LawyerSolvedQuestionsSearchQuery)
    var accessToken = yield select(state => state.accessToken)
    
    yield put(getLawyerSolvedQuestionsLoading(true))
    var {
      data,
      nextPageToken
    } = yield call(LawyerSolvedQuestionsApi, lastPageToken, accessToken, topicID, query)

    yield put(getLawyerSolvedQuestionsSuccess(data))
    yield put(getLawyerSolvedQuestionsLoading(false))
    if (!_.isUndefined(nextPageToken)) {
      yield put(setLawyerSolvedQuestionsPageToken(nextPageToken))
      yield put(getLawyerSolvedQuestionsNoMore(false))
    }
    else {
      yield put(getLawyerSolvedQuestionsNoMore(true))
    }
    
  } catch (error) {
    yield put(getLawyerSolvedQuestionsError(error))
    yield put(getLawyerSolvedQuestionsLoading(false))
    
    console.log('Solved questions error ',error)
  }
}
function* loadMoreLawyerSolvedQuestionsSaga(action) {
  try {
    var lastPageToken = yield select(state => state.LawyerSolvedQuestionsPageToken)
    var topicID = yield select(state => state.LawyerSolvedQuestionsFilterTopic)
    var query = yield select(state => state.LawyerSolvedQuestionsSearchQuery)
    var accessToken = yield select(state => state.accessToken)
    var noMore = yield select(state => state.getLawyerSolvedQuestionsNoMore)
    var lastData = yield select(state => state.getLawyerSolvedQuestionsSuccess)

    if (!noMore) {
      yield put(getLawyerSolvedQuestionsLoadingMore(true))
      var {
        data,
        nextPageToken
      } = yield call(LawyerSolvedQuestionsApi, lastPageToken, accessToken, topicID, query)
      var newData = [...lastData, ...data]
      yield put(getLawyerSolvedQuestionsSuccess(newData))
      yield put(getLawyerSolvedQuestionsLoadingMore(false))
      if (!_.isUndefined(nextPageToken)) {
        yield put(setLawyerSolvedQuestionsPageToken(nextPageToken))
      }
      else {
        yield put(getLawyerSolvedQuestionsNoMore(true))
      }
    }    
    
  } catch (error) {
    yield put(getLawyerSolvedQuestionsError(error))
    yield put(getLawyerSolvedQuestionsLoadingMore(false))
    
    console.log('search Solved questions error ',error)
  }
}

export function* getLawyerSolvedQuestions() {
  yield takeEvery([
    GET_Lawyer_Solved_QUESTIONS_REQUEST,
    SEARCH_Lawyer_Solved_QUESTIONS_REQUEST,
    FILTER_Lawyer_Solved_QUESTIONS_REQUEST
  ], getLawyerSolvedQuestionsSaga)
}
export function* loadMoreLawyerSolvedQuestions() {
  yield takeEvery([
    'getLawyerSolvedQuestionsLoadMore'
  ], loadMoreLawyerSolvedQuestionsSaga)
}