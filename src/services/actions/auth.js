import {setCookie, getCookie, deleteCookie} from '../../utils/cookie'
import { push } from 'connected-react-router';

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILED = "REGISTER_FAILED";

export const FORGOT_REQUEST = "FORGOT_REQUEST";
export const FORGOT_SUCCESS = "FORGOT_SUCCESS";
export const FORGOT_FAILED = "FORGOT_FAILED";

export const RESET_REQUEST = "RESET_REQUEST";
export const RESET_SUCCESS = "RESET_SUCCESS";
export const RESET_FAILED = "RESET_FAILED";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILED = "LOGOUT_FAILED";

export const REFRESH_REQUEST = "REFRESH_REQUEST";
export const REFRESH_SUCCESS = "REFRESH_SUCCESS";
export const REFRESH_FAILED = "REFRESH_FAILED";

export const USERDATA_REQUEST = "USERDATA_REQUEST";
export const USERDATA_SUCCESS = "USERDATA_SUCCESS";
export const USERDATA_FAILED = "USERDATA_FAILED";

export const USERDATAUPDATE_REQUEST = "USERDATAUPDATE_REQUEST";
export const USERDATAUPDATE_SUCCESS = "USERDATAUPDATE_SUCCESS";
export const USERDATAUPDATE_FAILED = "USERDATAUPDATE_FAILED";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const registerUser = (value) => (dispatch) => {
  dispatch({
    type: REGISTER_REQUEST,
  });
  fetch('https://norma.nomoreparties.space/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    body: JSON.stringify(value)
  }).then(e => {
    if (e.ok) {
      return e.json();
    }
    return Promise.reject(e)
  }).then(e => {
    const accessToken = e.accessToken.split('Bearer ')[1];
    const refreshToken = e.refreshToken;
    setCookie('token', accessToken, {expires: 20});
    localStorage.setItem('refreshToken', refreshToken);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: e.user,
    });
    dispatch(push('/'));
  }).catch(e => {
    dispatch({
      type: REGISTER_FAILED,
    });
  })
};

export const forgotPassword = (value) => (dispatch) => {
  dispatch({
    type: FORGOT_REQUEST,
  });
  fetch('https://norma.nomoreparties.space/api/password-reset', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    body: JSON.stringify(value)
  }).then(e => {
    if (e.ok) {
      return e.json();
    }
    return Promise.reject(e)
  }).then(() => {
    dispatch({
      type: FORGOT_SUCCESS,
      payload: value
    });
    dispatch(push('/reset-password'));
  }).catch(e => {
    dispatch({
      type: FORGOT_FAILED,
    });
  })
};

export const resetPassword = (value) => (dispatch) => {
  dispatch({
    type: RESET_REQUEST,
  });
  fetch('https://norma.nomoreparties.space/api/password-reset/reset', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    body: JSON.stringify(value)
  }).then(e => {
    if (e.ok) {
      return e.json();
    }
    return Promise.reject(e)
  }).then(e => {
    dispatch({
      type: RESET_SUCCESS,
    });
  }).catch(e => {
    dispatch({
      type: RESET_FAILED,
    });
  })
};

export const logoutUser = (value) => (dispatch) => {
  dispatch({
    type: LOGOUT_REQUEST,
  });
  fetch('https://norma.nomoreparties.space/api/auth/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    body: JSON.stringify({token: localStorage.getItem('refreshToken')}),
  }).then(e => {
    if (e.ok) {
      return e.json();
    }
    return Promise.reject(e)
  }).then(e => {
    deleteCookie('token');
    localStorage.removeItem('refreshToken');
    dispatch({
      type: LOGOUT_SUCCESS,
    });
    dispatch(push('/login'));
  }).catch(e => {
    dispatch({
      type: LOGOUT_FAILED,
    });
  })
};

export const loginUser = ({value, path}) => (dispatch) => {
  dispatch({
    type: LOGOUT_REQUEST,
  });
  fetch('https://norma.nomoreparties.space/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    body: JSON.stringify(value)
  }).then(e => {
    if (e.ok) {
      return e.json();
    }
    return Promise.reject(e)
  }).then(e => {
    const accessToken = e.accessToken.split('Bearer ')[1];
    const refreshToken = e.refreshToken;
    setCookie('token', accessToken, {expires: 20});
    localStorage.setItem('refreshToken', refreshToken);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: e.user,
    });
    dispatch(push(path));
  }).catch(() => {
    dispatch({
      type: LOGIN_FAILED,
    });
  })
};

export const refreshToken = (updateData) => (dispatch) => {
  dispatch({
    type: REFRESH_REQUEST,
  });
  fetch('https://norma.nomoreparties.space/api/auth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    body: JSON.stringify({token: localStorage.getItem('refreshToken')}),
  }).then(e => {
    if (e.ok) {
      return e.json();
    }
    return Promise.reject(e)
  }).then(e => {
    const accessToken = e.accessToken.split('Bearer ')[1];
    const refreshToken = e.refreshToken;
    setCookie('token', accessToken, {expires: 20});
    localStorage.setItem('refreshToken', refreshToken);
    dispatch({
      type: REFRESH_SUCCESS,
    });
    if (updateData) updateData()
  }).catch(() => {
    deleteCookie('token');
    localStorage.removeItem('refreshToken');
    dispatch({
      type: REFRESH_FAILED,
    });
  })
};

export const userData = (value) => (dispatch) => {
  dispatch({
    type: USERDATA_REQUEST,
  });
  fetch('https://norma.nomoreparties.space/api/auth/user', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + getCookie('token'),
    },
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',

  }).then(e => {
    return e.ok ? e.json() : e.json().then((err) => Promise.reject(err));
  }).then(e => {
    dispatch({
      type: USERDATA_SUCCESS,
      payload: e.user,
    });
  }).catch(e => {
    dispatch({
      type: USERDATA_FAILED,
    });

    if (e.message === "jwt expired") {
      refreshToken(() => userData());
    }
  })
};

export const userDataUpdate = (value) => (dispatch) => {
  dispatch({
    type: USERDATAUPDATE_REQUEST,
  });
  fetch('https://norma.nomoreparties.space/api/auth/user', {
    method: 'PATCH',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + getCookie('token'),
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(value)
  }).then(e => {
    return e.ok ? e.json() : e.json().then((err) => Promise.reject(err));
  }).then(e => {
    dispatch({
      type: USERDATAUPDATE_SUCCESS,
      payload: e.user,
    });
  }).catch(e => {
    dispatch({
      type: USERDATAUPDATE_FAILED,
    });

    if (e.message === "jwt expired") {
      refreshToken(() => userDataUpdate(value));
    }
  })
};
