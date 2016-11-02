import GITHUB_CONSTANTS from 'store/constants/github';
import { ActionType } from 'store/types/ActionType';

/**
 * Dispatch an action to request the search.
 *
 * @method searchCatalogueRequest
 * @public
 *
 * @param {String} query The query to search for
 * @param {Number} limit The limit of users
 *
 * @return {Object}
 */
export const searchUserRequest = (query:?string, limit:?number):ActionType => (
  {
    type: GITHUB_CONSTANTS.SEARCH_USER_REQUEST,
    payload: { query, limit }
  }
)

/**
 * Dispatch an action to the success of the search.
 *
 * @method searchCatalogueSuccess
 * @public
 *
 * @param {Array} users The products list
 *
 * @return {Object}
 */
export const searchUserSuccess = (users:Array):ActionType => (
  {
    type: GITHUB_CONSTANTS.SEARCH_USER_SUCCESS,
    payload: users
  }
)

/**
 * Dispatch an action to the success of the search.
 *
 * @method searchCatalogueSuccess
 * @public
 *
 * @param {Number} index The index of the user
 *
 * @return {Object}
 */
export const selectUser = (index:number):ActionType => (
  {
    type: GITHUB_CONSTANTS.SELECT_USER,
    payload: index
  }
)
