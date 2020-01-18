import React, {useEffect, useState} from 'react';
import LoginPage from "./pages/login-page/login-page";
import HomePage from "./pages/home-page/home-page";
import Route from "react-router-dom/es/Route";
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import {Redirect} from "react-router-dom";
import authService from "./services/auth.service";
import ProtectedRoute from "./components/protectedRoute";

export const TokenContext = React.createContext(null);

const App = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    setToken(authService.getTokenFromLocalStorage());
  }, []);

  useEffect(() => {
    authService.setTokenToLocalStorage(token);
  }, [token]);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      <BrowserRouter>
        <ProtectedRoute
          path="/home"
          condition={token}
          redirectTo={'/login'}>
          <HomePage/>
        </ProtectedRoute>
        <ProtectedRoute
          path="/login"
          condition={!token}
          redirectTo={'/home'}>>
          <LoginPage/>
        </ProtectedRoute>
        <Route exact path={'/'}>
          <Redirect to={'/login'}/>
        </Route>
        <Route path={'*'}>
          <Redirect to={'/login'}/>
        </Route>
      </BrowserRouter>
    </TokenContext.Provider>
  )
    ;
};

export default App;
