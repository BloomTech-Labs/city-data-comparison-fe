import {combineReducers} from 'redux';

import cityReducer from './cityReducer.js'
import userReducer from './userReducer.js'

export default combineReducers({
    cityReducer,
    userReducer
})