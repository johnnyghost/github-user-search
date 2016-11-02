import React from 'react';
import styles from './user-list.css';

/**
 * Defenition user list type
 * @type {Object}
 */
type UserListType = {
  list: Array<Object>,
  selected: ?number
}

/**
 * <UserList />
 *
 * @param  {Array<Object>} list The list to be render
 * @param  {Number} selected The selected index
 * @return {JSXElement}
 */
const UserList = ({list, selected}:UserListType):Object => {
  const renderList = ():Object => {
    return list.map((user:Object, index:number):Object => {
      const isHighlight = (index === selected) ? 'isHighlight' : false;

      return (
        <div
          className={styles.item}
          key={index}
        >
          <a
            className={styles.link}
            href={user.html_url}
          >
            <li className={isHighlight ? styles.highlight : styles.item}>
              <img
                className={styles.avatar}
                src={user.avatar_url}
              />
              <span className={isHighlight ? styles.nameWhite : styles.name}>{user.login}</span>
            </li>
          </a>
        </div>
      )
    })
  }

  return (
    <ul className={styles.list}> { renderList() } </ul>
  )
}
export default UserList
