import { call, put, takeEvery, select } from 'redux-saga/effects'
import {
  GET_USER_OWN_QUESTIONS_REQUEST,
  SEARCH_USER_OWN_QUESTIONS_REQUEST,
  FILTER_USER_OWN_QUESTIONS_REQUEST,
  getUserOwnQuestionsError,
  getUserOwnQuestionsLoading,
  getUserOwnQuestionsSuccess,
  setUserOwnQuestionsPageToken  
} from './actions'
import {
  getUserOwnQuestionsApi,
  searchUserOwnQuestionsApi,
  filterUserOwnQuestionsApi
} from '../../Services/BackendServices/UserOwnQuestsServices'
import { navigate, goBack} from '../../Services/NavigationServices'

function* getUserOwnQuestionsSaga(action) {
  try {
    navigate('Spinner')
    yield put(getUserOwnQuestionsLoading(true))
    let lastPageToken = yield select(state => state.UserOwnQuestionsPageToken)
    var {
      data,
      nextPage
    } = yield call(getUserOwnQuestionsApi, lastPageToken, action.accessToken)
    yield put(getUserOwnQuestionsSuccess(data))
    yield put(setUserOwnQuestionsPageToken(nextPage|| lastPageToken))
    yield put(getUserOwnQuestionsLoading(false))
    goBack()
  } catch (error) {
    yield put(getUserOwnQuestionsError(error))
    yield put(getUserOwnQuestionsLoading(false))
    goBack()
    console.log('own questions error ',error)
  }
}
function* searchUserOwnQuestionsSaga(action) {
  try {
    navigate('Spinner')
    yield put(getUserOwnQuestionsLoading(true))
    let lastPageToken = yield select(state => state.UserOwnQuestionsPageToken)
    var {
      data,
      nextPage
    } = yield call(searchUserOwnQuestionsApi, lastPageToken, action.accessToken, action.query)
    yield put(getUserOwnQuestionsSuccess(data))
    yield put(setUserOwnQuestionsPageToken(nextPage|| lastPageToken))
    yield put(getUserOwnQuestionsLoading(false))
    goBack()
  } catch (error) {
    yield put(getUserOwnQuestionsError(error))
    yield put(getUserOwnQuestionsLoading(false))
    goBack()
    console.log('search own questions error ',error)
  }
}
function* filterUserOwnQuestionsSaga(action) {
  try {
    navigate('Spinner')
    yield put(getUserOwnQuestionsLoading(true))
    let lastPageToken = yield select(state => state.UserOwnQuestionsPageToken)
    if(action.topicID == '0'){
      var {
        data,
        nextPage
      } = yield call(getUserOwnQuestionsApi, lastPageToken, action.accessToken)
    }
    else{
      var {
        data,
        nextPage
      } = yield call(filterUserOwnQuestionsApi, lastPageToken, action.accessToken, action.topicID)
    }        
    yield put(getUserOwnQuestionsSuccess(data))
    yield put(setUserOwnQuestionsPageToken(nextPage|| lastPageToken))
    yield put(getUserOwnQuestionsLoading(false))
    goBack()
  } catch (error) {
    yield put(getUserOwnQuestionsError(error))
    yield put(getUserOwnQuestionsLoading(false))
    goBack()
    console.log('search own questions error ',error)
  }
}

export function* getUserOwnQuestions() {
  yield takeEvery(GET_USER_OWN_QUESTIONS_REQUEST, getUserOwnQuestionsSaga)
}
export function* searchUserOwnQuestions() {
  yield takeEvery(SEARCH_USER_OWN_QUESTIONS_REQUEST, searchUserOwnQuestionsSaga)
}
export function* filterUserOwnQuestions() {
  yield takeEvery(FILTER_USER_OWN_QUESTIONS_REQUEST, filterUserOwnQuestionsSaga)
}