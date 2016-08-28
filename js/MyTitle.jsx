const React = require('react');
const ReactDDOM = require('react-dom');

const MyTitle = props => (
  <div>
    <h1 style={ {color: props.colo }}>
      { props.title }
    </h1>
  </div>
);

module.exports = MyTitle;
