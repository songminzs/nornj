var React = require('react');
const createReactClass = require('create-react-class');

module.exports = createReactClass({
  render: function() {
    return (
      <with attr="value">
        <span>{attr}</span>
      </with>
    );
  }
});
