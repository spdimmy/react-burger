import React, {useState} from 'react';
import styles from "./auth.module.css";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";

function ResetPasswordPage() {
  const [state, setState] = useState({
    password: '',
    code: ''
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
  };

  return (
    <main className={`container`}>
      <div className={styles.wrapper}>
        <h1 className={'text text_type_main-medium mb-6'}>Восстановление пароля</h1>
        <form onSubmit={handleSubmit}>
          <div className={'mb-6'}>
            <Input
              type={'password'}
              placeholder={'Введите новый пароль'}
              onChange={handleChange}
              value={state.password}
              name={'password'}
              error={false}
              errorText={'Ошибка'}
            />
          </div>
          <div className={'mb-6'}>
            <Input
              type={'text'}
              placeholder={'Введите код из письма'}
              onChange={handleChange}
              value={state.code}
              name={'code'}
              error={false}
              errorText={'Ошибка'}
            />
          </div>
          <div className="mb-20">
            <Button type="primary" size="medium">
              Сохранить
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

export default ResetPasswordPage;