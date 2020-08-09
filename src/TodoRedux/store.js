import reducer from './reducer';
import authreducer from '../AuthRedux/authreducer'
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import  thunk from 'redux-thunk'
import { saveData } from './localStorage'


const rootReducer = combineReducers({todoReducer:reducer, authReducer:authreducer})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

// console.log(store.getState())

store.subscribe(()=>saveData("state", store.getState()))

export default store;