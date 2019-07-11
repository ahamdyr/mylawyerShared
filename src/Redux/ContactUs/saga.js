import { call, put, takeEvery, select } from 'redux-saga/effects'
import {
  clearContactUsData
} from './actions'
import {
  contactUsApi
} from '../../Services/BackendServices/ContactUs'
import { goBack, navigate } from '../../Services/NavigationServices'

function* submitContactMessageSaga(action) {
  try {
    navigate('Spinner')
    //yield put(clearContactUsData(true))
    var {
      email, body
    } = action
    
    var res = yield call(contactUsApi, email, body)
    showMessage({
      message: 'Your message has been sent successfully',
      hideOnPress: true,
      autoHide: false,
      type: 'success',
    });
    goBack()
    goBack()
    yield put(clearContactUsData(false))
  } catch (error) {    
    showMessage({
      message: `${error}`,
      hideOnPress: true,
      autoHide: false,
      type: 'danger',
    });
    goBack()
    yield put(clearContactUsData(false))
  }
}

export default function* submitContactMessage() {
  yield takeEvery('submitMessage', submitContactMessageSaga)
}