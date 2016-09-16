const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const Landing = require('./Landing');
const Layout = require('./Layout');
const Search = require('./Search');

const { Router, Route, IndexRoute, hashHistory } = ReactRouter;

const App = () => (
  <Router history={hashHistory}>
    <Route path="/" component={Layout} >
      <IndexRoute component={Landing} />
      <Route path="/search" component={Search} />
    </Route>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('app'));
