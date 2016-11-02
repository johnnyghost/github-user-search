const TOKEN = '31128d281fb6fae41b256d9838af49bb060d49d1';

/**
 * Github service.
 * Abstraction of the github API.
 */
const githubService = {

  /**
   * Search User.
   *
   * @param {String} user The user to search for
   * @param {Number} limit The number of users to show
   *
   * @return {Promise<Array>} An array of github users
   */
  searchUser (user:?string, limit:?number):Promise {
    return fetch(`https://api.github.com/search/users?q=${user}&access_token=${TOKEN}`)
      .then(successResponseHandler)
      .then((data:Object):Object => {
        if (!limit) {
          return data;
        }
        Object.assign(data, { items: data.items.splice(0, limit) });
        return data;
      })
  }
}

/**
 * Success response handler.
 *
 * @param {Object} response The response Object
 * @return {Object}
 */
const successResponseHandler = ((response:Object):Object => response.json());

export default githubService;
