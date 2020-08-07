import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
      <Switch>
          <Route path='/' exact render={props => <App {...props}/>} />
      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

