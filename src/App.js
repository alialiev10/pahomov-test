import React from 'react';
import LoginPage from "./pages/login-page/login-page";
import HomePage from "./pages/home-page/home-page";
import Route from "react-router-dom/es/Route";
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import AuthorizedRoute from "./components/authorizedRoute";
import NonAuthorizedRoute from "./components/nonAuthotizedRoute";
import {Redirect} from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NonAuthorizedRoute path={'/login'}>
          <LoginPage/>
        </NonAuthorizedRoute>
        <AuthorizedRoute path="/home">
          <HomePage/>
        </AuthorizedRoute>
        <Route exact path={'/'}>
          <Redirect to={'/login'}/>
        </Route>
        <Route path={'*'}>
          <Redirect to={'/login'}/>
        </Route>
      </BrowserRouter>

    </>
)
  ;
};

export default App;
