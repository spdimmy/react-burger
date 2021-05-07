import React from 'react';
import styles from  './app-header.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function AppHeader() {
  return (
    <header className={`pt-2 pb-2 ${styles.header}`}>
      <div className={`container ${styles.container}`}>
        <nav>
          <ul className={styles.header__menu}>
            <li className="mr-1">
              <a href="./" className={`pt-2 pb-2 ${styles.button} ${styles.active}`}>
                <BurgerIcon type="primary" />
                <span>Конструктор</span>
              </a>
            </li>
            <li>
              <a href="./" className={`pt-2 pb-2 ${styles.button}`}>
                <ListIcon  type="secondary" />
                <span>Лента заказов</span>
              </a>
            </li>
          </ul>
        </nav>
        <a href="./" className={styles.header__logo}>
          <Logo />
        </a>
        <a href="./" className={`pt-2 pb-2 ${styles.button}`}>
          <ProfileIcon type="secondary" />
          <span>Личный кабинет</span>
        </a>
      </div>
    </header>
  )
}

export default AppHeader;