import { call, put, takeEvery, select } from 'redux-saga/effects'
import {
  getMajorsLoading,
  getMajorsSuccess
} from './actions'
import {
  getMajorsApi
} from '../../Services/BackendServices/Majors'

function* getMajorsListSaga(action) {
  try {
    yield put(getMajorsLoading(true))
    var data = yield call(getMajorsApi)
    yield put(getMajorsSuccess(data))
    yield put(getMajorsLoading(false))
  } catch (error) {
    console.log('Majors error ',error)
    yield put(getMajorsLoading(false))
  }
}

export default function* getMajorsList() {
  yield takeEvery('getMajorsRequest', getMajorsListSaga)
}