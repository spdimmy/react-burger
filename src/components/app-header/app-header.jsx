import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from  './app-header.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function AppHeader() {
  return (
    <header className={`pt-2 pb-2 ${styles.header}`}>
      <div className={`container ${styles.container}`}>
        <nav>
          <ul className={styles.header__menu}>
            <li className="mr-1">
              <NavLink className={`pt-2 pb-2 ${styles.button}`} to='/' activeClassName={styles.active}>
                <BurgerIcon type="primary" />
                <span>Конструктор</span>
              </NavLink>
            </li>
            <li>
              <NavLink className={`pt-2 pb-2 ${styles.button}`} to='/feed' activeClassName={styles.active}>
                <ListIcon type="secondary" />
                <span>Лента заказов</span>
              </NavLink>
            </li>
          </ul>
        </nav>
        <NavLink className={styles.header__logo} to='/' activeClassName={styles.active}>
          <Logo />
        </NavLink>
        <NavLink className={`pt-2 pb-2 ${styles.button}`} to='/profile' activeClassName={styles.active}>
          <ProfileIcon type="secondary" />
          <span>Личный кабинет</span>
        </NavLink>
      </div>
    </header>
  )
}

export default AppHeader;