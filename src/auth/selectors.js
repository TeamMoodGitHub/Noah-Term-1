export const getDisplayName = state => state.login.loggedIn
  ? state.login.user.displayName
  : null