const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const Landing = require('./Landing');

const { Router, Route, hashHistory } = ReactRouter;

const App = () => (
  <Router history={hashHistory}>
    <Route path="/" component={Landing} />
  </Router>
);

ReactDOM.render(<App />, document.getElementById('app'));
