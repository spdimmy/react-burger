import React, {useState} from "react";
import styles from './profile.module.css';
import cn from 'classnames';
import {NavLink} from "react-router-dom";
import {Input} from "@ya.praktikum/react-developer-burger-ui-components";

function ProfilePage() {
  const [state, setState] = useState({
    name: 'Марк',
    email: 'mail@stellar.burgers',
    password: '******|'
  });

  const [editState, setEditState] = useState(false);

  const onEditClick = () => {
    console.log('EditClick');

    setEditState(!editState);
  };

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
    <main className={cn(styles.main, 'container')}>
      <aside>
        <ul className={cn(styles.nav, 'mb-20')}>
          <li className={'mb-8'}>
            <NavLink to={'/profile'} className={cn(styles.link, 'text text_type_main-medium')} activeClassName={styles.active}>Профиль</NavLink>
          </li>
          <li className={'mb-8'}>
            <NavLink to={'/profile/orders'} className={cn(styles.link, 'text text_type_main-medium')} activeClassName={styles.active}>История заказов</NavLink>
          </li>
          <li className={'mb-8'}>
            <NavLink to={'/logout'} className={cn(styles.link, 'text text_type_main-medium')} activeClassName={styles.active}>Выход</NavLink>
          </li>
        </ul>
        <p className={'text text_type_main-default text_color_inactive'}>В этом разделе вы можете изменить свои персональные данные</p>
      </aside>
      <section>
        <form onSubmit={handleSubmit}>
          <div className={'mb-6'}>
            <Input
              type={'text'}
              placeholder={'Имя'}
              onChange={handleChange}
              value={state.name}
              name={'name'}
              icon={'EditIcon'}
              onIconClick={onEditClick}
              error={false}
              disabled={!editState}
              errorText={'Ошибка'}
            />
          </div>
          <div className={'mb-6'}>
            <Input
              type={'email'}
              placeholder={'Логин'}
              onChange={handleChange}
              value={state.email}
              name={'email'}
              icon={'EditIcon'}
              onIconClick={onEditClick}
              error={false}
              disabled={!editState}
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
              onIconClick={onEditClick}
              icon={'EditIcon'}
              disabled={!editState}
              errorText={'Ошибка'}
            />
          </div>
        </form>
      </section>
    </main>
  )
}

export default ProfilePage;