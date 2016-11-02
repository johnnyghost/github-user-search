/**
 * Create a constant object.
 *
 * @method createConstants
 * @public
 *
 * @param  {String} constants The constants to be converted.
 * @return {Object} an key/value constant object
 */
export function createConstants(...constants:Object):Object {

  return constants.reduce((accumulator:Object, constant:string):Object => {
    accumulator[constant] = constant;
    return accumulator;
  }, {});
}

/**
 * Create a reducer.
 *
 * @method createReducer
 * @public
 *
 * @param  {Object} initialState The initial state for the reducer
 * @param  {Object} reducerMap   The reducer object
 *
 * @return {Object} the reducer
 */
export function createReducer(initialState:?Object, reducerMap:Object):Function {

  return (state:Object = initialState, action:Object):mixed => {
    const reducer = reducerMap[action.type];

    return reducer
      ? reducer(state, action.payload, action.meta)
      : state;
  };
}
