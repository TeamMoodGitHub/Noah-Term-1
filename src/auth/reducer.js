import { types } from './actions'

const initialState = {
  loading: false,
  loggedIn: false,
  user: null,
  otherUserInfo: null,
};

export default function authReducer (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN.REQUEST:
    case types.LOGOUT.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.LOGIN.SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: true,
      };
    case types.LOGIN.FAILURE:
      return {
        ...state,
        loading: false,
      };
    case types.LOGOUT.SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: false,
      };
    case types.LOGOUT.FAILURE:
      return {
        ...state,
        loading: false,
      };
    case types.SYNC_USER:
      return {
        ...state,
        loggedIn: action.user !== null,
        user: action.user,
      };
    case types.USER.INFO_SUCCESS:
      return {
        ...state,
        otherUserInfo: action.userInfo,
      }
    default:
      return state
  }
}
