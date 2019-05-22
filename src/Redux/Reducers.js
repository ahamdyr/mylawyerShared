import { combineReducers } from 'redux'
//import * as ChatsReducer from './Chats/reducers'
import {socialModalOpen} from './Social Modal/reducers'
import * as Question from './AddQuestion/reducers'
import * as AuthReducer from './Auth/reducers'
export default combineReducers({
  //...ChatsReducer
  socialModalOpen,
  ...AuthReducer,
  ...Question
})