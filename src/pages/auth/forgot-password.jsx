import React, {useState} from 'react';
import styles from "./auth.module.css";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useHistory} from "react-router-dom";

function ForgotPasswordPage() {
  const history = useHistory();

  const [state, setState] = useState({
    email: '',
  });

  const handleChange = ({target: {value, name}}) => {
    setState({
      ...state,
      [name]: value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(state);

    history.replace({pathname: '/reset-password'})
  };

  return (
    <main className={`container`}>
      <div className={styles.wrapper}>
        <h1 className={'text text_type_main-medium mb-6'}>Восстановление пароля</h1>
        <form onSubmit={handleSubmit}>
          <div className={'mb-6'}>
            <Input
              type={'email'}
              placeholder={'Укажите e-mail'}
              onChange={handleChange}
              value={state.email}
              name={'email'}
              error={false}
              errorText={'Ошибка'}
            />
          </div>
          <div className="mb-20">
            <Button type="primary" size="medium">
              Восстановить
            </Button>
          </div>
        </form>

        <div className={'text text_type_main-default text_color_inactive'}>
          <div className={'mb-4'}>
            <span>Вспомнили пароль?</span><Link to='/login' className={styles.link}>Войти</Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ForgotPasswordPage;