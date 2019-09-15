import { combineReducers } from 'redux'
import {socialModalOpen} from './Social Modal/reducers'
import * as Question from './AddQuestion/reducers'
import * as AuthReducer from './Auth/reducers'
import * as TopicReducer from './TopicSelect/reducers'
import * as LawyersListReducer from './LawyersList/reducers'
import * as LawyerDetailsReducer from './LawyerDetails/reducers'
import * as UserAllQuestions from './UserAllQuests/reducers'
import * as UserOwnQuestions from './UserOwnQuests/reducers'
import * as questionAnswers from './Answers/reducers'
import * as questionAttachs from './Attachs/reducers'
import * as ContactUs from './ContactUs/reducers'
import * as Majors from './LawyerMajors/reducers'
import * as LawyerVerification from './LawyerVerification/reducers'
import * as LawyerAllQuests from './LawyerAllQuests/reducers'
import * as LawyerLockedQuests from './LawyerLockedQuests/reducers'
import * as LawyerNewQuests from './LawyerNewQuests/reducers'
import * as LawyerSolvedQuests from './LawyerSolvedQuests/reducers'
import * as MajorsList from './MajorsList/reducers'

export default combineReducers({
  socialModalOpen,
  ...AuthReducer,
  ...Question,
  ...TopicReducer,
  ... LawyersListReducer,
  ...LawyerDetailsReducer,
  ...UserAllQuestions,
  ...UserOwnQuestions,
  ...questionAnswers,
  ...questionAttachs,
  ...ContactUs,
  ...Majors,
  ...LawyerVerification,
  ...LawyerAllQuests,
  ...LawyerLockedQuests,
  ...LawyerNewQuests,
  ...LawyerSolvedQuests,
  ...MajorsList,
})