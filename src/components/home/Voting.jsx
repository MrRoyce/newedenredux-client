import React from 'react';
import {Link} from 'react-router';
//import HomeStore from '../stores/HomeStore';
//import HomeActions from '../actions/HomeActions';
//import {first, without, findWhere} from 'underscore';

class Voting extends React.Component {

  constructor (props) {
    super(props);
    /*this.state = HomeStore.getState();
    this.onChange = this.onChange.bind(this);*/
  }

  /*componentDidMount () {
    HomeStore.listen(this.onChange);
    HomeActions.getTwoCharacters();
  }

  componentWillUnmount () {
    HomeStore.unlisten(this.onChange);
  }

  onChange (state) {
    this.setState(state);
  }

  handleClick (character) {
    const winner = character.characterId,
          loser = first(without(this.state.characters, findWhere(this.state.characters, { characterId: winner }))).characterId;
    HomeActions.pair(winner, loser);
  }*/

  /*handleClick (character) {
    console.log('character clicked!');
    console.log(JSON.stringify(character));
  }*/

  render () {
    const characterNodes = this.props.pair.map((character, index) => {
      return (
        <div key={character.characterId} className={index === 0 ? 'col-xs-6 col-sm-6 col-md-5 col-md-offset-1' : 'col-xs-6 col-sm-6 col-md-5'}>
          <div className='thumbnail fadeInUp animated'>
            <img className='imgThumb' onClick={() => this.props.vote(character)} src={'http://image.eveonline.com/Character/' + character.characterId + '_512.jpg'}/>
            <div className='caption text-center'>
              <ul className='list-inline'>
                <li><strong>Race:</strong> {character.race}</li>
                <li><strong>Bloodline:</strong> {character.bloodline}</li>
              </ul>
              <h4>
                <Link to={'/characters/' + character.characterId}><strong>{character.name}</strong></Link>
              </h4>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className='container'>
        <h3 className='text-center'>Click on the portrait. Select your favorite.</h3>
        <div className='row'>
          {characterNodes}
        </div>
      </div>
    );
  }
}

export default Voting;
