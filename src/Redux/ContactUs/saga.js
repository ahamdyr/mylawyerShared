import { call, put, takeEvery, select } from 'redux-saga/effects'
import {
  clearContactUsData
} from './actions'
import {
  getTopicsApi
} from '../../Services/BackendServices/TopicsServices'
import { goBack, navigate } from '../../Services/NavigationServices'

function* submitContactMessageSaga(action) {
  try {
    navigate('Spinner')
    yield put(clearContactUsData(true))
    var {
      email, body
    } = action
    // call api 
    goBack()
    yield put(clearContactUsData(false))
  } catch (error) {
    console.log(error)    
    goBack()
    yield put(clearContactUsData(false))
  }
}

export default function* submitContactMessage() {
  yield takeEvery('submitMessage', submitContactMessageSaga)
}