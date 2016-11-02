import React from 'react';
import { GithubSearchContainer } from 'containers';

/**
 * <Main/> component
 *
 * @param {Object} props The props
 * @param {Object} props.children The section to be render
 * @return {JSXElement}
 */
const Main = ():Object => {

  return (
    <div className="app">
      <GithubSearchContainer />
    </div>
  );
}

export default Main;
