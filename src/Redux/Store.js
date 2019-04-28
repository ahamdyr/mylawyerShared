import {createStore, applyMiddleware, compose} from 'redux'
import createSagaMiddleware  from 'redux-saga'

import Reducer from './Reducers'
import Saga from './Saga'

export let configureStore = (initialState ) =>{
  const enhancer = compose(applyMiddleware(sagaMiddleware))
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    Reducer,
    initialState,
    enhancer
  )  
  sagaMiddleware.run(Saga)
  return store
}