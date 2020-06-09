import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import commentsReducer from './comments/reducers'

const store = createStore(commentsReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
