import { fork ,all} from 'redux-saga/effects'
import submitQuestion from './AddQuestion/saga'
import getTopics from './TopicSelect/saga'
import {getLawyersList, searchLawyersList} from './LawyersList/saga'
import getLawyerDetails from './LawyerDetails/saga'
import { getUserAllQuestions, loadMoreUserAllQuestions } from './UserAllQuests/saga'
import {  getUserOwnQuestions, loadMoreUserOwnQuestions } from './UserOwnQuests/saga'
import getAnswersList from './Answers/saga'
import getAttachsList from './Attachs/saga'
 
export default function * mySaga () {
  yield all([
    fork(submitQuestion),
    fork(getTopics),
    fork(getLawyersList),
    fork(searchLawyersList),
    fork(getLawyerDetails),
    fork(getUserAllQuestions),
    fork(loadMoreUserAllQuestions),
    fork(getUserOwnQuestions),
    fork(loadMoreUserOwnQuestions),
    fork(getAnswersList),
    fork(getAttachsList),

  ])  
}