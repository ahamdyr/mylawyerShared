import { fork ,all} from 'redux-saga/effects'
import submitQuestion from './AddQuestion/saga'
import getTopics from './TopicSelect/saga'
export default function * mySaga () {
  yield all([
    fork(submitQuestion),
    fork(getTopics)
  ])  
}