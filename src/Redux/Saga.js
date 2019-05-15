import { fork ,all} from 'redux-saga/effects'
// import chatsSaga from './Chats/saga'
// import chatSaga from './Chat/saga'
// import addUsersSaga from './AddUsers/saga'
// import getUsersSaga from './GetUsers/saga'

export default function * mySaga () {
  yield all([
    // fork(chatsSaga),
    // fork(chatSaga),
    // fork(addUsersSaga),
    // fork(getUsersSaga)
  ])  
}