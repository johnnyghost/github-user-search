import { fork } from 'redux-saga/effects';
import { watchSearchUsersGithub } from './watchSearchUsersGithub';

/**
 * Github saga root.
 */
export function* github():void {
  yield fork(watchSearchUsersGithub);
}
