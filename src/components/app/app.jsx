import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styles from './app.module.css';
import AppHeader from "../app-header/app-header";
import Modal from "../modal/modal";
import { useSelector } from "react-redux";
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

function App() {
  const { isOpen } = useSelector(store => store.modal);

  return (
    <>
      <div className={styles.app}>
        <Router>
          <AppHeader />
          <Switch>
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
        </Router>
      </div>
      {isOpen && <Modal />}
    </>
  );
}

export default App;
