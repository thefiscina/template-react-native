import types from './types';

export function appLoaded(data) {
  return {
    type: types.APP_LOADED,
    payload: { data },
  };
}

export function signInSuccess(token, user) {
  return {
    type: types.LOGIN_SUCESS,
    payload: { token, user },
  };
}

export function authenticaded(data) {
  return {
    type: types.AUTHENTICADED,
    payload: { data },
  };
}


export function logout(data) {
  return {
    type: types.LOGGOUT,
  };
}

