/**
 * Created by shaokxu on 11/28/16.
 */

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';

import posts from './post';
import comments from './comment';

const rootReducer = combineReducers({
    posts, comments, routing: routerReducer
});

export default rootReducer;