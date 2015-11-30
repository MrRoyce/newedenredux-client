/* eslint-disable react/jsx-quotes*/
'use strict';

import React from 'react';
import {Link} from 'react-router';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { thumb } from '../../action_creators';
//import FooterStore from '../stores/FooterStore';
//import FooterActions from '../actions/FooterActions';

export default React.createClass({
  //constructor (props) {
    //super(props);
    /*this.state = FooterStore.getState();
    this.onChange = this.onChange.bind(this);*/
  //}

  /*componentDidMount () {
    FooterStore.listen(this.onChange);
    FooterActions.getTopCharacters();
  }

  componentWillUnmount () {
    FooterStore.unlisten(this.onChange);
  }

  onChange (state) {
    this.setState(state);
  }*/
  mixins: [PureRenderMixin],

/*
 The 1st time this is invoked, the props hasn't been set yet,
 so, return an empty array if nothing exists
 */
  getTop5: function() {
    return this.props.top5Characters || [];
  },

 // Not sure why had to pass props into the function
 // it didn't work without it!  props was undefined??
  callReducer: (props, character) => {
    props.dispatch(thumb(character));
  },

  render () {
    const leaderboardCharacters = this.getTop5().map((character) => {
      return (
        <li key={character.get('characterId')}>
          <Link onClick={() => this.callReducer(this.props, character)}  to={'/characters/' + character.get('characterId')}>
            <img className='thumb-md' src={'http://image.eveonline.com/Character/' + character.get('characterId') + '_128.jpg'} />
          </Link>
        </li>
      );
    });

    return (
      <footer>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-5'>
              <h3 className='lead'><strong>Information</strong> and <strong>Copyright</strong></h3>
              <p>Powered by <strong>Node.js</strong>, <strong>MongoDB</strong> and <strong>React</strong> with Flux architecture and server-side rendering.</p>
              <p>You may view the <a href='https://github.com/MrRoyce/newedenredux-client.git'>Source Code</a> behind this project on GitHub.</p>
              <p>© 2015 @joomdflix.</p>
            </div>
            <div className='col-sm-7 hidden-xs'>
              <h3 className='lead'><strong>Leaderboard</strong> Top 5 Characters</h3>
              <ul className='list-inline'>
                {leaderboardCharacters}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
});
