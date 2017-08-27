export const getDisplayName = state => state.auth.loggedIn
  ? state.auth.user.displayName
  : null