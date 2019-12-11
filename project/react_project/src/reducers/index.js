import logger from './loggedInReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers( {
    logger: logger
});

export default allReducers;