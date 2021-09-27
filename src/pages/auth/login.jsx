import React, {useState} from 'react';
import styles from './auth.module.css';
import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {loginUser} from "../../services/actions/auth";

function LoginPage() {
  const dispatch = useDispatch();
  const { history } = useLocation();

  const [state, setState] = useState({
    email: '',
    password: ''
  });

  const onPasswordClick = () => {
    console.log('show or hide password');
  };

  const handleChange = ({target: {value, name}}) => {
    setState({
      ...state,
      [name]: value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginUser(state));
  };

  const hasToken = localStorage.getItem('refreshToken');

  if (hasToken) {
    return (
      <Redirect
        to={ history?.from || '/' }
      />
    );
  }

  return (
    <main className={`container`}>
      <div className={styles.wrapper}>
        <h1 className={'text text_type_main-medium mb-6'}>Вход</h1>
        <form onSubmit={handleSubmit}>
          <div className={'mb-6'}>
            <Input
              type={'email'}
              placeholder={'E-mail'}
              onChange={handleChange}
              value={state.email}
              name={'email'}
              error={false}
              errorText={'Ошибка'}
            />
          </div>

          <div className={'mb-6'}>
            <Input
              type={'password'}
              placeholder={'Пароль'}
              onChange={handleChange}
              value={state.password}
              name={'password'}
              error={false}
              onIconClick={onPasswordClick}
              icon={'ShowIcon'}
              errorText={'Ошибка'}
            />
          </div>

          <div className="mb-20">
            <Button type="primary" size="medium">
              Войти
            </Button>
          </div>
        </form>

        <div className={'text text_type_main-default text_color_inactive'}>
          <div className={'mb-4'}>
            <span>Вы — новый пользователь?</span><Link to='/register' className={styles.link}>Зарегистрироваться</Link>
          </div>
          <div className={'mb-4'}>
            <span>Забыли пароль?</span><Link to='/forgot-password' className={styles.link}>Восстановить пароль</Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default LoginPage;