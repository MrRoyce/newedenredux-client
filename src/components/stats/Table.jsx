'use strict';

import React from 'react';
/*import StatsStore from '../stores/StatsStore';
import StatsActions from '../actions/StatsActions';*/

export default React.createClass({
  /*constructor (props) {
    super(props);
    this.state = StatsStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount () {
    StatsStore.listen(this.onChange);
    StatsActions.getStats();
  }

  componentWillUnmount () {
    StatsStore.unlisten(this.onChange);
  }

  onChange (state) {
    this.setState(state);
  }*/

  render () {
    return (
      <div className='container'>
        <div className='panel panel-default'>
          <table className='table table-striped'>
            <thead>
            <tr>
              <th colSpan='2'>Stats</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Leading race in Top 100</td>
              <td>{this.props.stats.getIn(['leadingRace', 'race'])} with {this.props.stats.getIn(['leadingRace', 'count'])} characters</td>
            </tr>
            <tr>
              <td>Leading bloodline in Top 100</td>
              <td>{this.props.stats.getIn(['leadingBloodline', 'bloodline'])} with {this.props.stats.getIn(['leadingBloodline', 'count'])} characters
              </td>
            </tr>
            <tr>
              <td>Amarr Characters</td>
              <td>{this.props.stats.get('amarrCount')}</td>
            </tr>
            <tr>
              <td>Caldari Characters</td>
              <td>{this.props.stats.get('caldariCount')}</td>
            </tr>
            <tr>
              <td>Gallente Characters</td>
              <td>{this.props.stats.get('gallenteCount')}</td>
            </tr>
            <tr>
              <td>Minmatar Characters</td>
              <td>{this.props.stats.get('minmatarCount')}</td>
            </tr>
            <tr>
              <td>Total votes cast</td>
              <td>{this.props.stats.get('totalVotes')}</td>
            </tr>
            <tr>
              <td>Female characters</td>
              <td>{this.props.stats.get('femaleCount')}</td>
            </tr>
            <tr>
              <td>Male characters</td>
              <td>{this.props.stats.get('maleCount')}</td>
            </tr>
            <tr>
              <td>Total number of characters</td>
              <td>{this.props.stats.get('totalCount')}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
});
