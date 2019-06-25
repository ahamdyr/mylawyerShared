import { call, put, takeEvery, select } from 'redux-saga/effects'
import {
  GET_LAWYER_DETAILS_REQUEST,
  getLawyerDetailsError,
  getLawyerDetailsLoading,
  getLawyerDetailsSuccess
} from './actions'
import {
  getLawyerDetailsApi
} from '../../Services/BackendServices/LawyersServices'

function* getLawyerDetailsSaga(action) {
  try {
    yield put(getLawyerDetailsLoading(true))
    var data = yield call(getLawyerDetailsApi, action.lawyerID)
    yield put(getLawyerDetailsSuccess(data))
    yield put(getLawyerDetailsLoading(false))
  } catch (error) {
    yield put(getLawyerDetailsError(error))
    yield put(getLawyerDetailsLoading(false))
    console.log(error)
  }
}

export default function* getLawyerDetails() {
  yield takeEvery(GET_LAWYER_DETAILS_REQUEST, getLawyerDetailsSaga)
}