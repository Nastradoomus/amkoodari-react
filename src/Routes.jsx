import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './routes/Home';
import First from './routes/first/First';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/first">
        <First />
      </Route>
    </Switch>
  );
}
