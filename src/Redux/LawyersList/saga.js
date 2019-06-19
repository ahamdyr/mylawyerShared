import { call, put, takeEvery, select } from 'redux-saga/effects'
import {
  GET_LAWYERS_REQUEST,
  getLawyersError,
  getLawyersLoading,
  getLawyersSuccess,
  setLawyersPageToken
} from './actions'
import {
  getLawyersApi
} from '../../Services/BackendServices/LawyersServices'
import {
  navigate,
  goBack
} from '../../Services/NavigationServices'

function* getLawyersListSaga(action) {
  try {
    //yield put(getLawyersLoading(true))
    navigate('Spinner')
    let lastPageToken = yield select(state => state.lawyersPageToken)
    var {
      lawyers,
      newPageToken
    } = yield call(getLawyersApi, lastPageToken)
    yield put(getLawyersSuccess(lawyers))
    yield put(setLawyersPageToken(newPageToken))
    //yield put(getLawyersLoading(false))
    goBack()
  } catch (error) {
    yield put(getLawyersError(error))
    //yield put(getLawyersLoading(false))
    goBack()
    console.log(error)
  }
}

export default function* getLawyersList() {
  yield takeEvery(GET_LAWYERS_REQUEST, getLawyersListSaga)
}