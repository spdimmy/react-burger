import React from "react";
import styles from './profile.module.css';
import cn from 'classnames';
import {NavLink} from "react-router-dom";
import ProfileInfo from '../../components/profile-info/profile-info';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {logoutUser} from '../../services/actions/auth'

function ProfilePage() {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();

    dispatch(logoutUser());
  };

  return (
    <main className={cn(styles.main, 'container')}>
      <aside>
        <ul className={cn(styles.nav, 'mb-20')}>
          <li className={'mb-8'}>
            <NavLink to={'/profile'} className={cn(styles.link, 'text text_type_main-medium')} activeClassName={styles.active} exact={true}>Профиль</NavLink>
          </li>
          <li className={'mb-8'}>
            <NavLink to={'/profile/orders'} className={cn(styles.link, 'text text_type_main-medium')} activeClassName={styles.active} exact={true}>История заказов</NavLink>
          </li>
          <li className={'mb-8'}>
            <a href="/" onClick={handleClick} className={cn(styles.link, 'text text_type_main-medium')}>Выход</a>
          </li>
        </ul>
        <p className={'text text_type_main-default text_color_inactive'}>В этом разделе вы можете изменить свои персональные данные</p>
      </aside>
      <section>
        <Switch>
          <Route path="/profile" exact={true}>
            <ProfileInfo/>
          </Route>
          <Route path="/profile/orders" exact={true}>

          </Route>
          <Route path="/profile/orders/:id" exact={true}>

          </Route>
        </Switch>
      </section>
    </main>
  )
}

export default ProfilePage;