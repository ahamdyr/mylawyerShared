import { call, put, takeEvery, select } from 'redux-saga/effects'
import {
  GET_ATTACHS_REQUEST,
  attachsPageToken,
  getAttachsLoading,
  getAttachsSuccess
} from './actions'
import {
  getQuestionAttachsApi
} from '../../Services/BackendServices/QuestionAttachs'

function* getAttachsListSaga(action) {
  try {
    yield put(getAttachsLoading(true))
    var data = yield call(getQuestionAttachsApi, action.questionID)
    yield put(getAttachsSuccess(data))
    yield put(getAttachsLoading(false))
  } catch (error) {
    console.log('Attachs error ',error)
    yield put(getAttachsLoading(false))
  }
}

export default function* getAttachsList() {
  yield takeEvery(GET_ATTACHS_REQUEST, getAttachsListSaga)
}