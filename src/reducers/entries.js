import {Map} from 'immutable';
//import { UPDATE_PATH } from 'redux-simple-router';

// Set the intial state from the server
function setState(state, newState) {
  return state.merge(newState);
}

// Store the character that was clicked on
// (either by the thumbnail or the name)
function thumb(state, entry) {
  return state.set('character', entry);
}

function list(state, pathname) {
  // Temp just get 100 entries

  var myList = state.get('characters').take(100);

  return state.set('list', myList);
}

export default function entries(state = Map(), action) {

  switch (action.type) {

      case 'SET_ENTRIES':
        return setState(state, action.state);

      case 'THUMB':
        return thumb(state, action.thumbnail);

      case 'LIST':
        return list(state, action.pathname);

      default:
        break;
  }
  return state;
}
