import { call, put, takeEvery, select } from 'redux-saga/effects'
import {
  GET_USER_ALL_QUESTIONS_REQUEST,
  SEARCH_USER_ALL_QUESTIONS_REQUEST,
  getUserAllQuestionsError,
  getUserAllQuestionsLoading,
  getUserAllQuestionsSuccess,
  setUserAllQuestionsPageToken
} from './actions'
import {
  getUserAllQuestionsApi,
  searchUserAllQuestionsApi
} from '../../Services/BackendServices/UserAllQuestionsServices'

function* getUserAllQuestionsSaga(action) {
  try {
    yield put(getUserAllQuestionsLoading(true))
    let lastPageToken = yield select(state => state.UserAllQuestionsPageToken)
    var {
      data,
      nextPage
    } = yield call(getUserAllQuestionsApi, lastPageToken)
    yield put(getUserAllQuestionsSuccess(data))
    yield put(setUserAllQuestionsPageToken(nextPage|| lastPageToken))
    yield put(getUserAllQuestionsLoading(false))
  } catch (error) {
    yield put(getUserAllQuestionsError(error))
    yield put(getUserAllQuestionsLoading(false))
    console.log(error)
  }
}
function* searchUserAllQuestionsSaga(action) {
  try {
    yield put(getUserAllQuestionsLoading(true))
    let lastPageToken = yield select(state => state.UserAllQuestionsPageToken)
    var {
      data,
      nextPage
    } = yield call(searchUserAllQuestionsApi, lastPageToken, action.query)
    yield put(getUserAllQuestionsSuccess(data))
    yield put(setUserAllQuestionsPageToken(nextPage|| lastPageToken))
    yield put(getUserAllQuestionsLoading(false))
  } catch (error) {
    yield put(getUserAllQuestionsError(error))
    yield put(getUserAllQuestionsLoading(false))
    console.log(error)
  }
}

export function* getUserAllQuestions() {
  yield takeEvery(GET_USER_ALL_QUESTIONS_REQUEST, getUserAllQuestionsSaga)
}
export function* searchUserAllQuestions() {
  yield takeEvery(SEARCH_USER_ALL_QUESTIONS_REQUEST, searchUserAllQuestionsSaga)
}