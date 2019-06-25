import { call, put, takeEvery, select } from 'redux-saga/effects'
import {
  GET_TOPICS_REQUEST,
  getTopicsLoading,
  getTopicsSuccess,
  topicsPageToken
} from './actions'
import {
  getTopicsApi
} from '../../Services/BackendServices/TopicsServices'

function* getTopicsListSaga(action) {
  try {
    yield put(getTopicsLoading(true))
    let lastPageToken = yield select(state => state.topicsPageToken)
    var {
      data,
      nextPage
    } = yield call(getTopicsApi, lastPageToken)
    yield put(getTopicsSuccess(data))
    yield put(topicsPageToken(nextPage|| lastPageToken))
    yield put(getTopicsLoading(false))
  } catch (error) {
    console.log(error)
    yield put(getTopicsLoading(false))
  }
}

export default function* getTopicsList() {
  yield takeEvery(GET_TOPICS_REQUEST, getTopicsListSaga)
}