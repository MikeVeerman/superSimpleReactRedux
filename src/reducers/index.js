/**
 * The rootReducer combines all the reducers together.
 */
import { combineReducers } from 'redux';
import  ClicksReducer  from './reducer_clicks'

const rootReducer = combineReducers({
    clicks: ClicksReducer
});

export default rootReducer;