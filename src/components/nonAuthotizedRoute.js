import React from 'react';
import Redirect from "react-router-dom/es/Redirect";
import authService from "../services/auth.service";
import Route from "react-router-dom/es/Route";

const NonAuthorizedRoute = ({children, ...rest}) => {
  return (
    <Route
      {...rest}
      render={({location}) =>
        !authService.token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/home",
              state: {from: location}
            }}
          />
        )
      }
    />
  );

};


export default NonAuthorizedRoute;
