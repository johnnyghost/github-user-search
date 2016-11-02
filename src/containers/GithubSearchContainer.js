import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SearchInput, UserList } from 'components/ui';
import { githubActionCreators }  from 'store/actions/';
import { LIMIT_OF_USERS } from './constants';
import styles from './github-search-container.css';

type GithubSearchContainerType = {
  github: Object,
  githubActions: Object
}

/**
 * <GithubSearchContainer />
 *
 * @return {JSXElement}
 */
const GithubSearchContainer = ({
  github,
  githubActions
}:GithubSearchContainerType):Object => {

  /**
   * On change search input.
   *
   * @method onChange
   * @param {Object} event The event object
   */
  const onChange = (event:Object) => {
    const { value } = event.target;
    githubActions.searchUserRequest(value, LIMIT_OF_USERS);
  }

  /**
   * On key down generic handler.
   *
   * @method onKeyGenericHandler
   * @param  {Object} event The event object
   */
  const onKeyGenericHandler = (event:Object) => {

    const {
      selected,
      users
    } = github;

    /**
     * Enter key handler.
     *
     * @method enterKeyHandler
     * @private
     */
    const enterKeyHandler = () => {
      event.preventDefault();

      const selectedUser = users[selected];

      window.open(selectedUser && selectedUser.html_url, '_blank');
    }

    /**
     * Down key handler.
     *
     * @method downKeyHandler
     * @private
     */
    const downKeyHandler = () => {
      event.preventDefault();
      const index = selected > 0 ? selected - 1 : selected;
      githubActions.selectUser(index);
    }

    /**
     * Up key handler.
     *
     * @method upKeyHandler
     * @private
     */
    const upKeyHandler = () => {
      event.preventDefault();
      const index = selected < users.length - 1 ? selected + 1 : selected;
      githubActions.selectUser(index);
    }

    /**
     * Map events.
     * @type {Object}
     */
    const keyEventMapper = {
      13: enterKeyHandler,
      38: downKeyHandler,
      40: upKeyHandler
    }

    keyEventMapper[event.keyCode] && keyEventMapper[event.keyCode]();
  }

  return (
    <div
      className={styles.wrapper}
      onKeyDown={onKeyGenericHandler}
    >
      <SearchInput onChange={onChange} />
      <UserList
        list={github.users}
        selected={github.selected}
      />
    </div>
  );
}

/**
 * Will subscribe to Redux store updates
 *
 * @method
 *
 * @param  {Object} state Store’s state
 * @return {Object} and returns an object to be passed as props
 */
const mapStateToProps = (state:Object):Object => {
  return {
    github: state.github
  }
}

/**
 * Bound to the store.
 * Will be merged into the component’s props.
 *
 * @method
 *
 * @param {Function} dispatch Dispatch function
 * @return {Object}
 */
const mapDispatchToProps = (dispatch:Function):Object => ({
  githubActions : bindActionCreators(githubActionCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GithubSearchContainer);
