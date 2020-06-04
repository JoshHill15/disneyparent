import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest}
      render={() => {
        console.log("--------------", localStorage.getItem('token'))
        if (localStorage.getItem('token')) {
          return <Component />
        } else {
          return <Redirect to='/' />;
        }
      }} />
  );
};

export default PrivateRoute;