import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Register from "./screens/Register";
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
      <Switch>
          <Route path='/' exact render={props => <App {...props}/>} />
          <Route path='/register' exact render={props => <Register {...props} />} />
      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

