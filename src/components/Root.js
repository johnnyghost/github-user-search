import React from 'react';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';

import routes from './../routes';

/**
 * The root type defenition
 * @type {Object}
 */
type RootType = {
  store:Object
}

/**
 * <Root /> component
 *
 * @param {Object} props The props
 * @param {Object} props.store The store
 * @return {Object} An JSX element
 */
const Root = ({ store }:RootType):Object => (
    <Provider store={store}>
      <Router history={hashHistory}>{routes}</Router>
    </Provider>
)

export default Root;
