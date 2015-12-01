'use strict';

import React from 'react';
import {Link} from 'react-router';
import { list, thumb } from '../../action_creators';
import PureRenderMixin from 'react-addons-pure-render-mixin';
/*import {isEqual} from 'underscore';
import CharacterListStore from '../stores/CharacterListStore';
import CharacterListActions from '../actions/CharacterListActions';*/

export default React.createClass({
  /*constructor (props) {
    super(props);
    this.state = CharacterListStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount () {
    CharacterListStore.listen(this.onChange);
    CharacterListActions.getCharacters(this.props.params);
  }

  componentWillUnmount () {
    CharacterListStore.unlisten(this.onChange);
  }

  componentDidUpdate (prevProps) {
    if (!isEqual(prevProps.params, this.props.params)) {
      CharacterListActions.getCharacters(this.props.params);
    }
  }

  onChange (state) {
    this.setState(state);
  }*/

  mixins: [PureRenderMixin],

  // First call the reducer to get the correct
  // characters from the store placed in the state
  componentWillMount: function() {
    this.props.dispatch(list(this.props.location.pathname));
  },

  getList: function() {
    var myList = this.props.list || [];
    return myList;
  },

  callReducer: (props, character) => {
    props.dispatch(thumb(character));
  },

  render () {

    let charactersList = this.getList().map((character, index) => {
      return (
        <div key={character.get('characterId')} className='list-group-item animated fadeIn'>
          <div className='media'>
            <span className='position pull-left'>{index + 1}</span>
            <div className='pull-left thumb-lg'>
              <Link onClick={() => this.callReducer(this.props, character)} to={'/characters/' + character.get('characterId')}>
                <img className='media-object' src={'http://image.eveonline.com/Character/' + character.get('characterId') + '_128.jpg'} />
              </Link>
            </div>
            <div className='media-body'>
              <h4 className='media-heading'>
                <Link onClick={() => this.callReducer(this.props, character)} to={'/characters/' + character.get('characterId')}>{character.get('name')}</Link>
              </h4>
              <small>Race: <strong>{character.get('race')}</strong></small>
              <br />
              <small>Bloodline: <strong>{character.get('bloodline')}</strong></small>
              <br />
              <small>Wins: <strong>{character.get('wins')}</strong> Losses: <strong>{character.get('losses')}</strong></small>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className='container'>
        <div className='list-group'>
          {charactersList}
        </div>
      </div>
    );
  }
});
