import React from 'react';
import Redirect from "react-router-dom/es/Redirect";
import Route from "react-router-dom/es/Route";

const ProtectedRoute = ({children, condition, redirectTo, ...rest}) => {
  return (
    <Route
      {...rest}
      render={({location}) =>
        condition ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: redirectTo,
              state: {from: location}
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
