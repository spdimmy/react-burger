import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILED,

  FORGOT_REQUEST,
  FORGOT_SUCCESS,
  FORGOT_FAILED,

  RESET_REQUEST,
  RESET_SUCCESS,
  RESET_FAILED,

  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,

  REFRESH_REQUEST,
  REFRESH_SUCCESS,
  REFRESH_FAILED,

  USERDATA_REQUEST,
  USERDATA_SUCCESS,
  USERDATA_FAILED,

  USERDATAUPDATE_REQUEST,
  USERDATAUPDATE_SUCCESS,
  USERDATAUPDATE_FAILED,

  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS
} from '../actions/auth';

const initialState = {
  name: '',
  email: '',
  password: '',

  registerRequest: false,
  registerSuccess: false,
  registerFailed: false,

  forgotRequest: false,
  forgotSuccess: false,
  forgotFailed: false,

  resetRequest: false,
  resetSuccess: false,
  resetFailed: false,

  logoutRequest: false,
  logoutSuccess: false,
  logoutFailed: false,

  refreshRequest: false,
  refreshSuccess: false,
  refreshFailed: false,

  userdataRequest: false,
  userdataSuccess: false,
  userdataFailed: false,

  userdataupdateRequest: false,
  userdataupdateSuccess: false,
  userdataupdateFailed: false,

  loginRequest: false,
  loginFailed: false,
  loginSuccess: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST: {
      return {
        ...state,
        registerRequest: true, 
        registerFailed: false,
        registerSuccess: false,
      }
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        registerRequest: false,
        registerFailed: false,
        registerSuccess: true,
      }
    }
    case REGISTER_FAILED: {
      return {
        ...state,
        registerRequest: false,
        registerFailed: true,
        registerSuccess: false,
      }
    }
    case FORGOT_REQUEST: {
      return {
        ...state,
        forgotRequest: true,
        forgotFailed: false,
        forgotSuccess: false,
      }
    }
    case FORGOT_SUCCESS: {
      return {
        ...state,
        email: action.payload.email,
        forgotRequest: false,
        forgotFailed: false,
        forgotSuccess: true,
      }
    }
    case FORGOT_FAILED: {
      return {
        ...state,
        forgotRequest: false,
        forgotFailed: true,
        forgotSuccess: false,
      }
    }
    case RESET_REQUEST: {
      return {
        ...state,
        resetRequest: true,
        resetFailed: false,
        resetSuccess: false,
      }
    }
    case RESET_SUCCESS: {
      return {
        ...state,
        resetRequest: true,
        resetFailed: false,
        resetSuccess: true,
      }
    }
    case RESET_FAILED: {
      return {
        ...state,
        resetRequest: false,
        resetFailed: true,
        resetSuccess: false,
      }
    }
    case LOGOUT_REQUEST: {
      return {
        ...state,
        logoutRequest: true,
        logoutFailed: false,
        logoutSuccess: false,
      }
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        logoutRequest: false,
        logoutFailed: false,
        logoutSuccess: true,
      }
    }
    case LOGOUT_FAILED: {
      return {
        ...state,
        logoutRequest: false,
        logoutFailed: true,
        logoutSuccess: false,
      }
    }
    case REFRESH_REQUEST: {
      return {
        ...state,
        refreshRequest: true,
        refreshFailed: false,
        refreshSuccess: false,
      }
    }
    case REFRESH_SUCCESS: {
      return {
        ...state,
        refreshRequest: false,
        refreshFailed: false,
        refreshSuccess: true,
      }
    }
    case REFRESH_FAILED: {
      return {
        ...state,
        refreshRequest: false,
        refreshFailed: true,
        refreshSuccess: false,
      }
    }
    case USERDATA_REQUEST: {
      return {
        ...state,
        userdataRequest: true,
        userdataFailed: false,
        userdataSuccess: false,
      }
    }
    case USERDATA_SUCCESS: {
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        userdataRequest: false,
        userdataFailed: false,
        userdataSuccess: true,
      }
    }
    case USERDATA_FAILED: {
      return {
        ...state,
        userdataRequest: false,
        userdataFailed: true,
        userdataSuccess: false,
      }
    }
    case USERDATAUPDATE_REQUEST: {
      return {
        ...state,
        userdataupdateRequest: true,
        userdataupdateFailed: false,
        userdataupdateSuccess: false,
      }
    }
    case USERDATAUPDATE_SUCCESS: {
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        userdataupdateRequest: false,
        userdataupdateFailed: false,
        userdataupdateSuccess: true,
      }
    }
    case USERDATAUPDATE_FAILED: {
      return {
        ...state,
        userdataupdateRequest: false,
        userdataupdateFailed: true,
        userdataupdateSuccess: false,
      }
    }

    case LOGIN_REQUEST: {
      return {
        ...state,
        loginRequest: true,
        loginFailed: false,
        loginSuccess: false,
      }
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        loginRequest: false,
        loginFailed: false,
        loginSuccess: true,
      }
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        loginRequest: false,
        loginFailed: true,
        loginSuccess: false,
      }
    }
    default: {
      return state;
    }
  }
};
