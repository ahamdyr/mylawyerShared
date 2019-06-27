import { call, put, takeEvery, select } from 'redux-saga/effects'
import {
  GET_USER_ALL_QUESTIONS_REQUEST,
  SEARCH_USER_ALL_QUESTIONS_REQUEST,
  FILTER_USER_ALL_QUESTIONS_REQUEST,
  getUserAllQuestionsError,
  getUserAllQuestionsLoading,
  getUserAllQuestionsSuccess,
  setUserAllQuestionsPageToken
} from './actions'
import {
  getUserAllQuestionsApi,
  searchUserAllQuestionsApi,
  filterUserAllQuestionsApi
} from '../../Services/BackendServices/UserAllQuestionsServices'
import {goBack, navigate} from '../../Services/NavigationServices'

function* getUserAllQuestionsSaga(action) {
  try {
    navigate('Spinner')
    yield put(getUserAllQuestionsLoading(true))
    let lastPageToken = yield select(state => state.UserAllQuestionsPageToken)
    var {
      data,
      nextPage
    } = yield call(getUserAllQuestionsApi, lastPageToken)
    yield put(getUserAllQuestionsSuccess(data))
    yield put(setUserAllQuestionsPageToken(nextPage|| lastPageToken))
    yield put(getUserAllQuestionsLoading(false))
    goBack()
  } catch (error) {
    yield put(getUserAllQuestionsError(error))
    yield put(getUserAllQuestionsLoading(false))
    goBack()
    console.log('all questions error ',error)
  }
}
function* searchUserAllQuestionsSaga(action) {
  try {
    navigate('Spinner')
    yield put(getUserAllQuestionsLoading(true))
    let lastPageToken = yield select(state => state.UserAllQuestionsPageToken)
    var {
      data,
      nextPage
    } = yield call(searchUserAllQuestionsApi, lastPageToken, action.query)
    yield put(getUserAllQuestionsSuccess(data))
    yield put(setUserAllQuestionsPageToken(nextPage|| lastPageToken))
    yield put(getUserAllQuestionsLoading(false))
    goBack()
  } catch (error) {
    yield put(getUserAllQuestionsError(error))
    yield put(getUserAllQuestionsLoading(false))
    goBack()
    console.log('search all questions error ',error)
  }
}
function* filterUserAllQuestionsSaga(action) {
  try {
    navigate('Spinner')
    yield put(getUserAllQuestionsLoading(true))
    let lastPageToken = yield select(state => state.UserAllQuestionsPageToken)
    if(action.topicID == '0'){
      var {
        data,
        nextPage
      } = yield call(getUserAllQuestionsApi, lastPageToken)
    }
    else{
      var {
        data,
        nextPage
      } = yield call(filterUserAllQuestionsApi, lastPageToken, action.topicID)
    }    
    yield put(getUserAllQuestionsSuccess(data))
    yield put(setUserAllQuestionsPageToken(nextPage|| lastPageToken))
    yield put(getUserAllQuestionsLoading(false))
    goBack()
  } catch (error) {
    yield put(getUserAllQuestionsError(error))
    yield put(getUserAllQuestionsLoading(false))
    goBack()
    console.log('filter all questions error ',error)
  }
}

export function* getUserAllQuestions() {
  yield takeEvery(GET_USER_ALL_QUESTIONS_REQUEST, getUserAllQuestionsSaga)
}
export function* searchUserAllQuestions() {
  yield takeEvery(SEARCH_USER_ALL_QUESTIONS_REQUEST, searchUserAllQuestionsSaga)
}
export function* filterUserAllQuestions() {
  yield takeEvery(FILTER_USER_ALL_QUESTIONS_REQUEST, filterUserAllQuestionsSaga)
}