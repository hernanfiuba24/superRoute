import React from "react";
import { Route } from 'react-router-dom';


export default ({ component: Component, ...rest }) =>
       <Route {...rest} render={(props) => (
              <Component {...props} />
       )} />;


