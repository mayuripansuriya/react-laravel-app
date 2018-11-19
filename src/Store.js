import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import { combineReducers } from 'redux'

import Reducer from '../src/reducers';

const Store = createStore(

    combineReducers({
        reducer : Reducer
    }),
    applyMiddleware(thunk, promiseMiddleware())

)

export default Store
