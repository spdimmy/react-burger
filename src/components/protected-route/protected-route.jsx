import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {refreshToken} from '../../services/actions/auth'
import { useSelector, useDispatch } from 'react-redux';

export function ProtectedRoute({ children, ...rest }) {
  const dispatch = useDispatch();

  const tokenSuccess = useSelector(store => store.auth.refreshSuccess);
  const hasToken = !!localStorage.getItem('refreshToken');

  useEffect(() => {
    if (!tokenSuccess && hasToken) {
      dispatch(refreshToken())
    }
  }, [dispatch, hasToken, tokenSuccess]);

  // if (hasToken && !tokenSuccess) {
  //   return ''
  // }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        (hasToken && tokenSuccess) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}