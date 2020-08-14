import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Register from "./screens/Register";
import Activate from "./screens/Activate";
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <BrowserRouter>
      <Switch>
          <Route path='/' exact render={props => <App {...props}/>} />
          <Route path='/register' exact render={props => <Register {...props} />} />
          <Route patt='/activate/:token' exact render={props => <Activate {...props} />} />
      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

