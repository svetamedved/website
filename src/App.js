import React, {Component} from 'react';
import PageWrapper from './components/PageWrapper';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

//Pages
import Home from './components/Pages/Home';
import About from './components/Pages/About';

class App extends Component {
  render() {
    return(
      <Router>
      <PageWrapper>
          <Route
            exact={true}
            path="/"
            component={Home}
          />

          <Route
            path="/a"
            render={() => {
              return(
                <h1>I am the /a Route</h1>
                );
            }}
          />

          <Route
            path="/ab"
            render={() => {
              return(
                <h1>I am the /ab Route</h1>
                );
            }}
          />

          <Route
            path="/about"
            component={About}
          />

      </PageWrapper>
      </Router>
      );
  }
}

export default App;
