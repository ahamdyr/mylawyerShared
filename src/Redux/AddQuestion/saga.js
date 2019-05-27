import { call, put, takeEvery, select } from 'redux-saga/effects'
import {
  SUBMIT_QUESTION,
  addQuestion
} from './actions'

function* submitQuestionSaga(action) {
  try {
    const topic = yield select(state => state.questionTopic)
    const title = yield select(state => state.questionTitle)
    const body = yield select(state => state.questionBody)
    const imgs = yield select(state => state.questionImgs)
    const docs = yield select(state => state.questionDocs)
    const attachments = [...imgs, ...docs]
    const question = ({
      topic, title, body, attachments
    })
    yield put(addQuestion(question))
    console.log('question ',question)
  } catch (error) {
    console.log(error)
  }
}

export default function* submitQuestion() {
  yield takeEvery(SUBMIT_QUESTION, submitQuestionSaga)
}