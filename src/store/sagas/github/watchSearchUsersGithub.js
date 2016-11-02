import { put, call } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { githubService } from 'core/services'
import GITHUB_CONSTANTS from 'store/constants/github';

/**
 * Fetch the catalogue.
 * @param {Object} action The action object
 */
function *searchUsersGithub(action:Object):void {
  try {
    const users = yield call(githubService.searchUser, action.payload.query, action.payload.limit);
    yield put({ type: GITHUB_CONSTANTS.SEARCH_USER_SUCCESS, payload: users });
    yield put({ type: GITHUB_CONSTANTS.SELECT_USER, payload: 0 });
  } catch (error) {
    yield put({ type: GITHUB_CONSTANTS.ERROR });
  }
}

/**
 * Watch fetch catalogue saga.
 */
export function* watchSearchUsersGithub():void {
  yield* takeLatest(GITHUB_CONSTANTS.SEARCH_USER_REQUEST, searchUsersGithub);
}
