import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer'
import { nominalReducer } from '../reducers/nominalReducer';

const reducers = combineReducers({auth:authReducer, nomina: nominalReducer})
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

//thunk is a middleware to handle async calls
//you can handle the call and then the dispatch but we can also doit this way
export const store = createStore(reducers,
    composeEnhancers(applyMiddleware(thunk))
    )