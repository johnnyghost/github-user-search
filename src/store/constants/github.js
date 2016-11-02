import { createConstants } from 'utils/redux';

const catalogueConstants = createConstants(
  'SEARCH_USER_REQUEST',
  'SEARCH_USER_SUCCESS',
  'SELECT_USER',
  'ERROR'
);

export default catalogueConstants;
