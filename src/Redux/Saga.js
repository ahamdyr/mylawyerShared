import { fork ,all} from 'redux-saga/effects'
import submitQuestion from './AddQuestion/saga'

export default function * mySaga () {
  yield all([
    fork(submitQuestion),
  ])  
}