/*
 These functions are called action creators. There's really not much to them - they are pure functions that just return action objects - but what they do is encapsulate the internal structure of the action objects so that the rest of your codebase doesn't need to be concerned with that. Actions creators also conveniently document all the actions that can be dispatched in a given application. That information would be more difficult to gather if it was sprinkled all over the codebase in object literals.
 */

export function setState(state) {
  return {
    type: 'SET_ENTRIES',
    state
  };
}

export function thumb(thumbnail) {
  return {
    type: 'THUMB',
    thumbnail
  };
}
