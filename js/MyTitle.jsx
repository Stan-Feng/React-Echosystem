const React = require('react');
const ReactDDOM = require('react-dom');

const MyTitle = props => (
  <div>
    <h1 style= {{ color: props.color}}>
      { props.title }
    </h1>
  </div>
);

module.exports = MyTitle;
