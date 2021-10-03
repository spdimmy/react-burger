import React, {useState} from 'react';
import styles from "./auth.module.css";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { registerUser } from '../../services/actions/auth';

function RegisterPage() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: '',
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

    dispatch(registerUser(state));
  };

  const hasToken = localStorage.getItem('refreshToken');

  if (hasToken) {
    return (
      <Redirect
        to={{
          pathname: '/'
        }}
      />
    );
  }

  return (
    <main className={`container`}>
      <div className={styles.wrapper}>
        <h1 className={'text text_type_main-medium mb-6'}>Регистрация</h1>
        <form onSubmit={handleSubmit}>
          <div className={'mb-6'}>
            <Input
              type={'text'}
              placeholder={'Имя'}
              onChange={handleChange}
              value={state.name}
              name={'name'}
              error={false}
              errorText={'Ошибка'}
            />
          </div>
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
              Зарегистрироваться
            </Button>
          </div>
        </form>

        <div className={'text text_type_main-default text_color_inactive'}>
          <div className={'mb-4'}>
            <span>Уже зарегистрированы?</span><Link to='/login' className={styles.link}>Войти</Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default RegisterPage;