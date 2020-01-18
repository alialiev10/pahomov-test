import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";
import Link from "@material-ui/core/Link/Link";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import styles from "./login-page.module.scss"
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {useFormik} from "formik";
import validateRequired from "../../utils/required.validator";
import hasErrors from "../../utils/form-errors-checker.util";
import authService from "../../services/auth.service";
import Redirect from "react-router-dom/es/Redirect";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);

  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: values => {
      const errors = {
        email: validateRequired(values.email),
        password: validateRequired(values.password),
      };

      Object.entries(errors).forEach(([key, value]) => {
        if (!value) {
          delete errors[key];
        }
      });

      return errors;
    },
    onSubmit: async values => {
      setLoading( true);
      const { jwt } = await authService.authorize(values.email, values.password);
      authService.token = jwt;
      setRedirectTo('/home');
    }
  });

  const [redirectTo, setRedirectTo] = useState();

  if (redirectTo) {
    return <Redirect to={redirectTo}/>
  }

  return (
    <>
      <div className={styles['form-wrap']}>
        <form
          onSubmit={loginForm.handleSubmit}
          className={styles.form}>
          <div className={`${styles.logo} ${styles['logo-login']}`}>
            <LockOutlinedIcon/>
          </div>
          <h1 className={`${styles.title} ${styles['title-login']}`}>Вход в аккаунт</h1>
          <TextField
            className={`${styles.input} ${styles['input-login']}`}
            error={hasErrors(loginForm, 'email')}
            id="email"
            name="email"
            label="Почта"
            value={loginForm.email}
            onChange={loginForm.handleChange}
            onBlur={loginForm.handleBlur}
            required
            helperText={hasErrors(loginForm, 'email') && loginForm.errors.email}
            variant="outlined"/>
          <TextField
            className={`${styles.input} ${styles['input-login']}`}
            error={hasErrors(loginForm, 'password')}
            id="password"
            name="password"
            label="Пароль"
            value={loginForm.password}
            onChange={loginForm.handleChange}
            onBlur={loginForm.handleBlur}
            required
            helperText={hasErrors(loginForm, 'password') && loginForm.errors.password}
            variant="outlined"/>

          <FormControlLabel
            className={styles['check-box']}
            control={
              <Checkbox
                // checked={state.checkedB}
                // onChange={handleChange('checkedB')}
                // value="checkedB"
                color="primary"
              />
            }
            label="Запомнить меня"/>
          {loading ? <CircularProgress/> :
          <Button
            className={styles.button}
            variant="contained"
            type="submit"
            color="primary">Войти в аккаунт</Button>}
          <div className={styles.links}>
            <Link
              type="button"
              component="button"
              variant="body2"
              onClick={() => {
                console.info("I'm a button.");
              }}
            >
              Забыли пароль?
            </Link>
            <Link
              type="button"
              component="button"
              variant="body2"
              onClick={() => {
                console.info("I'm a button.");
              }}
            >
              Еще нет аккаунта? Регистрация
            </Link>
          </div>
          <p>Copyright© Ваш сайт 2019.</p>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
