import React from 'react';
import {List, Map} from 'immutable';
import {Characters} from '../../test/constants/characters';

const
    pair           = List(Characters.pair),
    top5Characters = List(Characters.top5Characters),
    character      = Characters.top5Characters[1];

export default React.createClass({
  render: function() {
    return React.cloneElement(this.props.children, {
        pair           : pair,
        top5Characters : top5Characters,
        character      : character
    });
  }
});
