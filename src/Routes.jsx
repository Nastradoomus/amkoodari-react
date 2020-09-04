import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './routes/Home';
import First from './routes/first/First';
import Second from './routes/second/Second';
import Third from './routes/third/Third';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/first">
        <First />
      </Route>
      <Route exact path="/second">
        <Second />
      </Route>
      <Route exact path="/third">
        <Third />
      </Route>
    </Switch>
  );
}
