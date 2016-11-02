import Main from 'components/Main';

/**
 * Main configuration file.
 *
 * @type {Object}
 */
const configuration = {
  path: '/',
  getComponents(location:?Object, cb:Function) {
    cb(null, Main);
  }
};

export default configuration;
