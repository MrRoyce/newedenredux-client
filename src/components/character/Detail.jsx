import React from 'react';
import Navbar from '../common/Navbar';
import Character from './Character';
import Footer from '../common/Footer';

class Home extends React.Component {

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
    HomeActions.vote(winner, loser);
  }*/

  render () {

    return (
      <div>
        <Navbar />
        <Character character={this.props.character} />
        <Footer top5Characters={this.props.top5Characters} />
      </div>
    );
  }
}

export default Home;
