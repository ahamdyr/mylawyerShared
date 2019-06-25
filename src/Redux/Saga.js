import { fork ,all} from 'redux-saga/effects'
import submitQuestion from './AddQuestion/saga'
import getTopics from './TopicSelect/saga'
import getLawyersList from './LawyersList/saga'
import getLawyerDetails from './LawyerDetails/saga'
import { getUserAllQuestions, searchUserAllQuestions } from './UserAllQuests/saga'
import {  getUserOwnQuestions, searchUserOwnQuestions } from './UserOwnQuests/saga'
 
export default function * mySaga () {
  yield all([
    fork(submitQuestion),
    fork(getTopics),
    fork(getLawyersList),
    fork(getLawyerDetails),
    fork(getUserAllQuestions),
    fork(searchUserAllQuestions),
    fork(getUserOwnQuestions),
    fork(searchUserOwnQuestions),
  ])  
}