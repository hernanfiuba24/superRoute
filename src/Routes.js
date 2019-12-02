import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from './home/Home';
import SuperMarket from './supermarket/Supermarket'
import SupermarketDetail from './supermarket/SupermarketDetail';


export default () =>
  <Switch>
    <PrivateRoute path="/home" exact component={Home} />
    <PrivateRoute path="/supermarkets" exact component={SuperMarket} />
    <PrivateRoute path="/supermarkets/:id" exact component={SupermarketDetail} />

  </Switch>;


