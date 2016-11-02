import GITHUB_CONSTANTS from 'store/constants/github';
import { createReducer } from 'utils/redux';

/**
 * The initial state.
 * @type {Object}
 */
const initialState = {
  users: [],
  selected: 0,
  isLoading: false
};

/**
 * Search catalogue success
 *
 * @method
 *
 * @param  {Object} state The state
 * @param  {Object} data  The data received
 *
 * @return {Object} The current state
 */
const searchUserSuccess = (state:Object, data:Object):Object => {

  return {
    ...state,
    users: data.items,
    isLoading: false
  };
}

/**
 * Search users request
 *
 * @method
 *
 * @param  {Object} state The state
 *
 * @return {Object} The current state
 */
const searchUserRequest = (state:Object):Object => {

  return {
    ...state,
    users: [],
    isLoading: true
  };
}

/**
 * Select user by index.
 *
 * @method
 *
 * @param {Object} state The state
 * @param {number} selected The selected user index
 *
 * @return {Object} The current state
 */
const selectUser = (state:Object, selected:number):Object => {
  return {
    ...state,
    selected
  }
}

export default createReducer(initialState, {
  [GITHUB_CONSTANTS.SEARCH_USER_REQUEST]: searchUserRequest,
  [GITHUB_CONSTANTS.SEARCH_USER_SUCCESS]: searchUserSuccess,
  [GITHUB_CONSTANTS.SELECT_USER]: selectUser
});
