'use strict';

import React from 'react';
require('magnific-popup');
import $ from 'jquery';
/*import CharacterStore from '../stores/CharacterStore';
import CharacterActions from '../actions/CharacterActions';*/

export default React.createClass({
  //constructor (props) {
    //super(props);
    //this.state = this.props.character || []; //CharacterStore.getState();
    //this.onChange = this.onChange.bind(this);
  //}

  //componentDidMount () {
    //CharacterStore.listen(this.onChange);
    //CharacterActions.getCharacter(this.props.params.id);

    /*$('.magnific-popup').magnificPopup({
      type: 'image',
      mainClass: 'mfp-zoom-in',
      closeOnContentClick: true,
      midClick: true,
      zoom: {
        enabled: true,
        duration: 300
      }
    });*/
  //}

  componentWillMount: function() {
    $(document.body).attr('class', 'profile ' + this.props.character.get('race').toLowerCase());
  },

  componentWillUnmount () {
    //CharacterStore.unlisten(this.onChange);
    $(document.body).removeClass();
  },
/*
  componentDidUpdate (prevProps) {
    // Fetch new character data when URL path changes
    if (prevProps.params.id !== this.props.params.id) {
      CharacterActions.getCharacter(this.props.params.id);
    }
  }*/

  /*onChange (state) {
    this.setState(state);
  }*/

  // temp removed
  // onClick={CharacterActions.report.bind(this, this.state.characterId)}
  // $(document.body).attr('class', 'profile ' + this.race.toLowerCase());

  render () {
    //$(document.body).attr('class', 'profile ' + this.props.character.race.toLowerCase());

    return (
      <div className='container'>
        <div className='profile-img'>
          <a className='magnific-popup' href={'https://image.eveonline.com/Character/' + this.props.character.get('characterId') + '_1024.jpg'}>
            <img src={'https://image.eveonline.com/Character/' + this.props.character.get('characterId') + '_256.jpg'} />
          </a>
        </div>
        <div className='profile-info clearfix'>
          <h2><strong>{this.props.character.get('name')}</strong></h2>
          <h4 className='lead'>Race: <strong>{this.props.character.get('race')}</strong></h4>
          <h4 className='lead'>Bloodline: <strong>{this.props.character.get('bloodline')}</strong></h4>
          <h4 className='lead'>Gender: <strong>{this.props.character.get('gender')}</strong></h4>
          <button className='btn btn-transparent'
                  ref="reported"
                  onClick={this.props.reported}
                  disabled={this.props.character.get('isReported')}>
            {this.props.character.get('isReported') ? 'Reported' : 'Report Character'}
          </button>
        </div>
        <div className='profile-stats clearfix'>
          <ul>
            <li><span className='stats-number'>{this.props.character.get('winLossRatio')}</span>Winning Percentage</li>
            <li><span className='stats-number'>{this.props.character.get('wins')}</span> Wins</li>
            <li><span className='stats-number'>{this.props.character.get('losses')}</span> Losses</li>
          </ul>
        </div>
      </div>
    );
  }
});
