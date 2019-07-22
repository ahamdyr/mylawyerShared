import { call, put, takeEvery, select } from 'redux-saga/effects'
import {
  SUBMIT_QUESTION,
  addQuestion,
  addAttachs
} from './actions'

function* submitQuestionSaga(action) {
  try {
    var preId = yield select(state => state.questions[state.questions.length - 1].id)
    var nextId = preId + 1
    var topic = yield select(state => state.questionTopic)
    var title = yield select(state => state.questionTitle)
    var body = yield select(state => state.questionBody)
    var imgs = yield select(state => state.questionImgs)
    var docs = yield select(state => state.questionDocs)
    var author = yield select(state => state.currentUser.displayName)
    var authorID = yield select(state => state.currentUser.id)
    var authorPhoto = yield select(state => state.currentUser.photo)
    var accessToken = yield select(state => state.accessToken)
    var attachments = [...imgs, ...docs].map((e,index) => ({
        id: index + 1,
        type: e.type,
        isPublic: true,
        link: e.uri
    }))
    var question = {
      id: nextId,
      title: title,
      body: body,
      topic: {
        id: topic.id,
        name: topic.name
      },
      addedOn: "01/01/19",
      by: {
        id: authorID,
        name: author,
        photo: authorPhoto || ''
      },
      lastActivity: {
        type: "comment",
        addedOn: "01/01/19",
        isAccepted: true,
        isRejected: true,
        isExpired: true,
        by: {
          id: 1,
          name: 'Amir Fawzy',
          type: "lawyer|user",
          photo: ''
        }
      }
    }
    var attachs = {}
    attachs[nextId] = attachments
    //console.log('attachments  ',attachs)
    yield put(addQuestion(question))
    yield put(addAttachs(attachs))
    //console.log('question ',question)
  } catch (error) {
    console.log(error)
  }
}

export default function* submitQuestion() {
  yield takeEvery(SUBMIT_QUESTION, submitQuestionSaga)
}