import { call, put, takeEvery, select } from 'redux-saga/effects'
import {
  GET_LAWYERS_REQUEST,
  SEARCH_LAWYERS_REQUEST,
  getLawyersError,
  getLawyersLoading,
  getLawyersSuccess,
  setLawyersPageToken,
  searchLawyersSuccess
} from './actions'
import {
  getLawyersApi,
  searchLawyersApi
} from '../../Services/BackendServices/LawyersServices'
import {
  goBack, navigate
} from '../../Services/NavigationServices'

function* getLawyersListSaga(action) {
  try {
    yield put(getLawyersLoading(true))
    let lastPageToken = yield select(state => state.lawyersPageToken)
    var {
      data,
      nextPage
    } = yield call(getLawyersApi, lastPageToken)
    yield put(getLawyersSuccess(data))
    yield put(setLawyersPageToken(nextPage|| lastPageToken))
    yield put(getLawyersLoading(false))
  } catch (error) {
    yield put(getLawyersError(error))
    yield put(getLawyersLoading(false))
    //console.log('lawyers list error ',error)
  }
}
function* searchLawyersListSaga(action) {
  try {
    //yield put(getLawyersLoading(true))
    navigate('Spinner')
    let lastPageToken = yield select(state => state.lawyersPageToken)
    var {
      data,
      nextPage
    } = yield call(searchLawyersApi, lastPageToken, action.query)
    yield put(searchLawyersSuccess(data))
    yield put(setLawyersPageToken(nextPage|| lastPageToken))
    goBack()
  } catch (error) {
    //yield put(getLawyersError(error))
    goBack()
    console.log('search lawyers list error ',error)
  }
}

export function* getLawyersList() {
  yield takeEvery(GET_LAWYERS_REQUEST, getLawyersListSaga)
}
export function* searchLawyersList() {
  yield takeEvery(SEARCH_LAWYERS_REQUEST, searchLawyersListSaga)
}