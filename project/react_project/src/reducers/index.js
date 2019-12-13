import logger from './loggedInReducer';
import posting from './postingReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers( {
    logger: logger,
    posting: posting
});

export default allReducers;