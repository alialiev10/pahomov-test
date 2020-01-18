import React from 'react';
import LoginPage from "./pages/login-page/login-page";
import HomePage from "./pages/home-page/home-page";
import Route from "react-router-dom/es/Route";
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import PrivateRouteComponent from "./components/private-route.component";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Route exact path={'/login'} component={LoginPage}/>
        <PrivateRouteComponent path="/home">
          <HomePage/>
        </PrivateRouteComponent>
        <Route exact path={'/'} component={LoginPage}/>
      </BrowserRouter>

    </>
)
  ;
};

export default App;
