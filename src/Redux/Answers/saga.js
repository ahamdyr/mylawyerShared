import { call, put, takeEvery, select } from 'redux-saga/effects'
import {
  GET_ANSWERS_REQUEST,
  getAnswersLoading,
  answersPageToken,
  getAnswersSuccess
} from './actions'
import {
  getQuestionAnswersApi
} from '../../Services/BackendServices/QuestionAnswers'

function* getAnswersListSaga(action) {
  try {
    yield put(getAnswersLoading(true))
    let lastPageToken = yield select(state => state.answersPageToken)
    var data = yield call(getQuestionAnswersApi, action.questionID, lastPageToken)
    yield put(getAnswersSuccess(data))
    yield put(answersPageToken(lastPageToken))
    yield put(getAnswersLoading(false))
  } catch (error) {
    console.log('answers error ',error)
    yield put(getAnswersLoading(false))
  }
}

export default function* getAnswersList() {
  yield takeEvery(GET_ANSWERS_REQUEST, getAnswersListSaga)
}