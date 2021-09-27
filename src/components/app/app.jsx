import React from 'react';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
import styles from './app.module.css';
import AppHeader from "../app-header/app-header";
import Modal from "../modal/modal";
import {useDispatch, useSelector} from "react-redux";
import HomePage from "../../pages/home";
import Page404 from "../../pages/page-404";
import LoginPage from "../../pages/auth/login";
import RegisterPage from "../../pages/auth/register";
import ForgotPasswordPage from "../../pages/auth/forgot-password";
import ResetPasswordPage from "../../pages/auth/reset-password";
import PageFeed from "../../pages/feed/feed";
import OrderInfoPage from "../../pages/order-info/order-info";
import ProfilePage from "../../pages/profile/profile";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { ProtectedRoute } from '../protected-route/protected-route';
import { push } from 'connected-react-router';

function App() {
  const { isOpen } = useSelector(store => store.modal);
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const background = (history.action === 'PUSH' || history.action === 'REPLACE') && location.state && location.state.background;

  console.log(background);

  return (
    <>
      <div className={styles.app}>
        <AppHeader />
        <Switch location={background || location}>
          <Route path="/" exact={true}>
            <HomePage />
          </Route>
          <Route path="/login" exact={true}>
            <LoginPage />
          </Route>
          <Route path="/register" exact={true}>
            <RegisterPage />
          </Route>
          <Route path="/forgot-password" exact={true}>
            <ForgotPasswordPage />
          </Route>
          <Route path="/reset-password" exact={true}>
            <ResetPasswordPage />
          </Route>
          <Route path="/feed" exact={true}>
            <PageFeed />
          </Route>
          <Route path="/feed/:id" exact={true}>
            <OrderInfoPage />
          </Route>
          <ProtectedRoute path="/profile" exact={true}>
            <ProfilePage />
          </ProtectedRoute>
          <Route path="/ingredients/:id" exact={true}>
            <IngredientDetails />
          </Route>
          <Route>
            <Page404 />
          </Route>
        </Switch>
      </div>
      {isOpen && <Modal />}
      {background &&
      (<>
        <Route path='/ingredients/:id'>
          <Modal closeModal={() => {dispatch(push('/'))}}><IngredientDetails/></Modal>
        </Route>
      </>)}
    </>
  );
}

export default App;
