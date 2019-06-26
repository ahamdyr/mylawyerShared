import { call, put, takeEvery, select } from 'redux-saga/effects'
import {
  GET_USER_OWN_QUESTIONS_REQUEST,
  SEARCH_USER_OWN_QUESTIONS_REQUEST,
  getUserOwnQuestionsError,
  getUserOwnQuestionsLoading,
  getUserOwnQuestionsSuccess,
  setUserOwnQuestionsPageToken  
} from './actions'
import {
  getUserOwnQuestionsApi,
  searchUserOwnQuestionsApi
} from '../../Services/BackendServices/UserOwnQuestsServices'

function* getUserOwnQuestionsSaga(action) {
  try {
    yield put(getUserOwnQuestionsLoading(true))
    let lastPageToken = yield select(state => state.UserOwnQuestionsPageToken)
    var {
      data,
      nextPage
    } = yield call(getUserOwnQuestionsApi, lastPageToken, action.accessToken)
    yield put(getUserOwnQuestionsSuccess(data))
    yield put(setUserOwnQuestionsPageToken(nextPage|| lastPageToken))
    yield put(getUserOwnQuestionsLoading(false))
  } catch (error) {
    yield put(getUserOwnQuestionsError(error))
    yield put(getUserOwnQuestionsLoading(false))
    console.log('own questions error ',error)
  }
}
function* searchUserOwnQuestionsSaga(action) {
  try {
    yield put(getUserOwnQuestionsLoading(true))
    let lastPageToken = yield select(state => state.UserOwnQuestionsPageToken)
    var {
      data,
      nextPage
    } = yield call(searchUserOwnQuestionsApi, lastPageToken, action.accessToken, action.query)
    yield put(getUserOwnQuestionsSuccess(data))
    yield put(setUserOwnQuestionsPageToken(nextPage|| lastPageToken))
    yield put(getUserOwnQuestionsLoading(false))
  } catch (error) {
    yield put(getUserOwnQuestionsError(error))
    yield put(getUserOwnQuestionsLoading(false))
    console.log('search own questions error ',error)
  }
}

export function* getUserOwnQuestions() {
  yield takeEvery(GET_USER_OWN_QUESTIONS_REQUEST, getUserOwnQuestionsSaga)
}
export function* searchUserOwnQuestions() {
  yield takeEvery(SEARCH_USER_OWN_QUESTIONS_REQUEST, searchUserOwnQuestionsSaga)
}