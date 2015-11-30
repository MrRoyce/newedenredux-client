import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import Navbar from '../common/Navbar';
import Voting from './Voting';
import Footer from '../common/Footer';

//import HomeStore from '../stores/HomeStore';
//import HomeActions from '../actions/HomeActions';
//import {first, without, findWhere} from 'underscore';

export const Home = React.createClass({

  mixins: [PureRenderMixin],

  render () {

    return (
      <div>
        <Navbar {...this.props} />
        <Voting {...this.props} />
        <Footer {...this.props} />
      </div>
    );
  }
});

/*
 The role of the mapping function is to map the state from the Redux Store into an object of props. Those props will then be merged into the props of the component that's being connected.
 https://github.com/rackt/redux/issues/916
 */
function mapStateToProps(state) {

  return {
    top5Characters : state.get('top5Characters'),
    numCharacters  : state.get('numCharacters'),
    pair           : state.get('pair')
  };
}

export const HomeContainer = connect(
  mapStateToProps
)(Home);
