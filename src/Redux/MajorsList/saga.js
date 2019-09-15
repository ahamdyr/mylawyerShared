import { call, put, takeEvery, select } from 'redux-saga/effects'
import {
  getMajorsError,
  getMajorsLoading,
  getMajorsSuccess
} from './actions'
import {
  getMajorsApi
} from '../../Services/BackendServices/MajorsList'

function* getMajorsListSaga(action) {
  try {
    yield put(getMajorsLoading(true))
    var {
      data
    } = yield call(getMajorsApi)
    yield put(getMajorsSuccess(data))
    yield put(getMajorsLoading(false))
  } catch (error) {
    yield put(getMajorsError(error))
    yield put(getMajorsLoading(false))
    //console.log('lawyers list error ',error)
  }
}

export default function* getMajorsList() {
  yield takeEvery('getMajorsRequest', getMajorsListSaga)
}