import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import Navbar from '../common/Navbar';
import Table from './Table';
import Footer from '../common/Footer';

export const Stats = React.createClass({

  mixins: [PureRenderMixin],

  render () {

    return (
      <div>
        <Navbar {...this.props} />
        <Table {...this.props} />
        <Footer {...this.props} />
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    top5Characters : state.get('top5Characters'),
    numCharacters  : state.get('numCharacters'),
    stats          : state.get('stats')
  };
}

/*
 The dispatch to the store is passed on props down to the child
 components, if the second parameter that would usually be the action creators is NOT passed to connect!
 https://github.com/rackt/redux/issues/916
 */
export const StatsContainer = connect(
  mapStateToProps
)(Stats);
