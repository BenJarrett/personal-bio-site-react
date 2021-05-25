import React from 'react';
import { Route, Switch } from 'react-router-dom';

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path='/'/>
        <Route
        exact path='/projects'
        />
         <Route
        exact path='/bio'
        />
         <Route
        exact path='/technologies'
        />
        <Route
        exact path='/contact'
        />
      </Switch>
    </div>
  );
}
