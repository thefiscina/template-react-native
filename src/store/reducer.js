import types from './types';

const INITIAL_STATE = {
  app_started: false,
  authenticaded: false,
  user: {},
  token: null
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.APP_LOADED:
      return { ...state, app_started: action.payload.data };
    case types.LOGIN_SUCESS:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user
      };
    case types.AUTHENTICADED:
      return { ...state, authenticaded: action.payload.data };
    case types.LOGGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
}
