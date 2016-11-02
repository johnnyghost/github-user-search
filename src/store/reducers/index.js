import { combineReducers } from 'redux';

// reducers
import GithubReducer from './github';

/**
 * Combine all reducers.
 */
const appReducer = combineReducers({
  github: GithubReducer
});

/**
 * Delegates to the appReducer.
 *
 * @method
 * @private
 *
 * @param  {Object} state  The state object
 * @param  {Object} action The action
 * @return {Object}
 */
const rootReducer = (state:?Object, action:Object):Object => appReducer(state, action);

export default rootReducer;
