import { call, put, takeEvery, select } from 'redux-saga/effects'
import {
  GET_TOPICS_REQUEST,
  getTopicsLoading,
  getTopicsSuccess
} from './actions'
import {
  getTopicsApi
} from '../../Services/BackendServices/TopicsServices'
function* getTopicsListSaga(action) {
  try {
    yield put(getTopicsLoading(true))
    var topics = yield call(getTopicsApi)
    yield put(getTopicsSuccess(topics))
    yield put(getTopicsLoading(false))    
  } catch (error) {
    console.log(error)
  }
}

export default function* getTopicsList() {
  yield takeEvery(GET_TOPICS_REQUEST, getTopicsListSaga)
}