import React from 'react';

export default React.createClass({
  render: function() {
    return this.props.children;  // The props/data comes from the redux store
  }
});
