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

function capitalise(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// Filter the entries by the provided path parameters
function list(state, pathname) {

  var path   = pathname.split("/"),
      myList = state.get('characters')
        .filter((character) => {
          switch (path[1]) {

            case 'Male':
            case 'Female':
              return character.get('gender') === path[1];

            default:
              return true;
          }
        })
        .filter((character) => {  // Check race filter
            return (path[2]) ? character.get('race') === path[2] : true;
        })
        .filter((character) => {  // Check bloodline filter
            return (path[3]) ? character.get('bloodline') === path[3] : true;
        })
        .sort((a, b) => b.get('wins') - a.get('wins'))
        .take(100);
  //debugger;  //path array 0: blank, 1: category(top, male, female, shame), 2: race, 3:bloodline
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
