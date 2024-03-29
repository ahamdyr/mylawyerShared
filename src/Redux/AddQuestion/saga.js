import { call, put, takeEvery, select } from 'redux-saga/effects'
import {
  SUBMIT_QUESTION,
  addQuestionLoading,
  deleteAttachments,
  clearQuestion
} from './actions'
import { askQuestionApi } from '../../Services/BackendServices/AskNewQuestion'
import { addQuestionAttachsService } from '../../Services/BackendServices/QuestionAttachs'
import { goBack, navigate} from '../../Services/NavigationServices'

function* submitQuestionSaga(action) {
  try {    
    //yield put(addQuestionLoading(true))
    navigate('Spinner')
    var topic = yield select(state => state.questionTopic)
    var title = yield select(state => state.questionTitle)
    var body = yield select(state => state.questionBody)
    var imgs = yield select(state => state.questionImgs)
    var docs = yield select(state => state.questionDocs)
    // var author = yield select(state => state.currentUser.displayName)
    // var authorID = yield select(state => state.currentUser.id)
    // var authorPhoto = yield select(state => state.currentUser.photo)
    var accessToken = yield select(state => state.accessToken)
    var attachments = [...imgs, ...docs]
    var { assignedTo } = action
    var { id } = yield call(askQuestionApi, topic, accessToken, title, body, assignedTo)
    //console.log('questionID  ',id)
    yield call(addQuestionAttachsService, attachments, id, accessToken)
    yield put(clearQuestion(true))
    yield put(deleteAttachments())
    showMessage({
      message: 'Your question has been submitted',
      hideOnPress: true,
      duration: 3000,
      type: 'success',
    });
    goBack()
    goBack()
    yield put(clearQuestion(false))
    //yield put(addQuestionLoading(false))
  } catch (error) {
    // console.log('ask question error ',error)
    showMessage({
      message: `${error}\n Try again!`,
      hideOnPress: true,
      duration: 3000,
      type: 'danger',
    });
    yield put(clearQuestion(false))
    goBack()
    //yield put(addQuestionLoading(false))
  }
}

export default function* submitQuestion() {
  yield takeEvery(SUBMIT_QUESTION, submitQuestionSaga)
}