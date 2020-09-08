import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import spinnerimage from './assets/images/spinner.svg';

const Home = lazy(() => import('./routes/Home'));
const First = lazy(() => import('./routes/first/First'));
const Second = lazy(() => import('./routes/second/Second'));
const Third = lazy(() => import('./routes/third/Third'));
const Fourth = lazy(() => import('./routes/fourth/Fourth'));
const Fifth = lazy(() => import('./routes/fifth/Fifth'));
const Sixth = lazy(() => import('./routes/sixth/Sixth'));
const Seventh = lazy(() => import('./routes/seventh/Seventh'));
const Eighth = lazy(() => import('./routes/eighth/Eighth'));
const Project = lazy(() => import('./routes/eighth/components/Project'));

export const Spinner = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        textAlign: 'center',
      }}
    >
      <img src={spinnerimage} alt="Loading..." />
    </div>
  );
};
export default function Routes() {
  return (
    <Switch>
      <Route
        path="/react-js"
        component={() => {
          window.location.href = 'https://reactjs.org/';
          return null;
        }}
      />
      <Route
        path="/redux-js"
        component={() => {
          window.location.href = 'https://redux.js.org/';
          return null;
        }}
      />
      <Route
        path="/react-routering"
        component={() => {
          window.location.href = 'https://reactrouter.com/';
          return null;
        }}
      />
      <Route exact path="/">
        <Suspense fallback={<Spinner />}>
          <Home />
        </Suspense>
      </Route>
      <Route exact path="/first">
        <Suspense fallback={<Spinner />}>
          <First />
        </Suspense>
      </Route>
      <Route exact path="/second">
        <Suspense fallback={<Spinner />}>
          <Second />
        </Suspense>
      </Route>
      <Route exact path="/third">
        <Suspense fallback={<Spinner />}>
          <Third />
        </Suspense>
      </Route>
      <Route exact path="/fourth">
        <Suspense fallback={<Spinner />}>
          <Fourth />
        </Suspense>
      </Route>
      <Route exact path="/fifth">
        <Suspense fallback={<Spinner />}>
          <Fifth />
        </Suspense>
      </Route>
      <Route exact path="/sixth">
        <Suspense fallback={<Spinner />}>
          <Sixth />
        </Suspense>
      </Route>
      <Route exact path="/seventh">
        <Suspense fallback={<Spinner />}>
          <Seventh />
        </Suspense>
      </Route>
      <Route exact path="/eighth">
        <Suspense fallback={<Spinner />}>
          <Eighth />
        </Suspense>
      </Route>
      <Route exact path="/eighth/project">
        <Suspense fallback={<Spinner />}>
          <Project />
        </Suspense>
      </Route>
    </Switch>
  );
}
