import {createStore, applyMiddleware, compose} from 'redux'
import createSagaMiddleware  from 'redux-saga'

import Reducer from './Reducers'
import Saga from './Saga'

const configureStore = (initialState ) =>{
  const sagaMiddleware = createSagaMiddleware()
  const enhancer = compose(applyMiddleware(sagaMiddleware))
  const store = createStore(
    Reducer,
    initialState,
    enhancer
  )  
  sagaMiddleware.run(Saga)
  return store
}
const Store = configureStore()
export default Store