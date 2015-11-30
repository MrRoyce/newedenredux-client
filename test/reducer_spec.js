import {Map, fromJS} from 'immutable';
import {expect} from 'chai';
import {Characters} from './constants/characters';
import reducer from '../src/reducers/entries';

describe('reducer', () => {

  it('handles SET_ENTRIES with immutable object', () => {
    const initialState = Map();

    const action = {
      type: 'SET_ENTRIES',
      state: Map({
        top5Characters: Characters.top5Characters,
        numCharacters: 9,
        pair: Characters.pair
      })
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(Map({
        top5Characters: Characters.top5Characters,
        numCharacters: 9,
        pair: Characters.pair
      }));
  });

  it('handles SET_ENTRIES with plain JS payload', () => {
    const initialState = Map();
    const action = {
      type: 'SET_ENTRIES',
      state: {
        top5Characters: Characters.top5Characters,
        numCharacters: 9,
        pair: Characters.pair
      }
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
        top5Characters: Characters.top5Characters,
        numCharacters: 9,
        pair: Characters.pair
    }));
  });

  it('handles SET_ENTRIES without initial state', () => {
    const action = {
      type: 'SET_ENTRIES',
      state: {
        top5Characters: Characters.top5Characters,
        numCharacters: 9,
        pair: Characters.pair
      }
    };
    const nextState = reducer(undefined, action);

    expect(nextState).to.equal(fromJS({
        top5Characters: Characters.top5Characters,
        numCharacters: 9,
        pair: Characters.pair
    }));
  });

  it('handles THUMB by setting character', () => {
    const
      state = fromJS({
        top5Characters: Characters.top5Characters,
        numCharacters: 9,
        pair: Characters.pair
    }),
      character = fromJS(
          Characters.character
    );
    const action = {type: 'THUMB', thumbnail: character};
    const nextState = reducer(state, action);

    expect(nextState).to.equal(fromJS({
      top5Characters: Characters.top5Characters,
      numCharacters: 9,
      pair: Characters.pair,
      character: Characters.character
    }));

  });

});
