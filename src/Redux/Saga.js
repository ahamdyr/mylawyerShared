import { fork ,all} from 'redux-saga/effects'
import submitQuestion from './AddQuestion/saga'
import getTopics from './TopicSelect/saga'
import {getLawyersList, searchLawyersList} from './LawyersList/saga'
import getLawyerDetails from './LawyerDetails/saga'
import { getUserAllQuestions, loadMoreUserAllQuestions } from './UserAllQuests/saga'
import {  getUserOwnQuestions, loadMoreUserOwnQuestions } from './UserOwnQuests/saga'
import {  getLawyerAllQuestions, loadMoreLawyerAllQuestions } from './LawyerAllQuests/saga'
import {  getLawyerLockedQuestions, loadMoreLawyerLockedQuestions } from './LawyerLockedQuests/saga'
import {  getLawyerNewQuestions, loadMoreLawyerNewQuestions } from './LawyerNewQuests/saga'
import {  getLawyerSolvedQuestions, loadMoreLawyerSolvedQuestions } from './LawyerSolvedQuests/saga'
import getAnswersList from './Answers/saga'
import getAttachsList from './Attachs/saga'
import submitContactMessage from './ContactUs/saga'
import getMajorsList from './LawyerMajors/saga'
import getMajors from './MajorsList/saga'
 
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
    fork(submitContactMessage),
    fork(getMajorsList),
    fork(getLawyerAllQuestions),
    fork(loadMoreLawyerAllQuestions),
    fork(getLawyerLockedQuestions),
    fork(loadMoreLawyerLockedQuestions),
    fork(getLawyerNewQuestions),
    fork(loadMoreLawyerNewQuestions),
    fork(getLawyerSolvedQuestions),
    fork(loadMoreLawyerSolvedQuestions),
    fork(getMajors),
  ])  
}