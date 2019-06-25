import { combineReducers } from 'redux'
import {socialModalOpen} from './Social Modal/reducers'
import * as Question from './AddQuestion/reducers'
import * as AuthReducer from './Auth/reducers'
import * as TopicReducer from './TopicSelect/reducers'
import * as LawyersListReducer from './LawyersList/reducers'
import * as LawyerDetailsReducer from './LawyerDetails/reducers'
import * as UserAllQuestions from './UserAllQuests/reducers'
import * as UserOwnQuestions from './UserOwnQuests/reducers'

export default combineReducers({
  socialModalOpen,
  ...AuthReducer,
  ...Question,
  ...TopicReducer,
  ... LawyersListReducer,
  ...LawyerDetailsReducer,
  ...UserAllQuestions,
  ...UserOwnQuestions
})