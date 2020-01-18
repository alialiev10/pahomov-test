import React, {useState} from 'react';
import styles from "./home-page.module.scss";
import Button from "@material-ui/core/Button/Button";
import authService from "../../services/auth.service";
import PrivateRouteComponent from "../../components/private-route.component";
import Redirect from "react-router-dom/es/Redirect";

const HomePage = () => {
 const [redirectTo, setRedirectTo] = useState();
  if (redirectTo) {
    return <Redirect to={redirectTo}/>
  }
  const logOut = () => {
    authService.clearTokenFromLocalStorage();
    setRedirectTo('/login');
  };
  return (
    <>
      <div className={styles['div-wrap']}>
        <h1 className={styles.title}>Вы авторизованы</h1>
        <Button
          className={styles.button}
          variant="contained"
          type="submit"
          onClick={() => logOut()}
          color="primary">Выйти из аккаунта</Button>
      </div>
    </>
  );
};

export default HomePage;
