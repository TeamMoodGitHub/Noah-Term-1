export const types = {
  SCHOOL: {
    SYNC: 'SCHOOL.SYNC',
    ADD: 'SCHOOL.ADD',
    REMOVE: 'SCHOOL.REMOVE',
  },
  SCHOOLPAGES: {
    SUBSCRIBE: 'SCHOOLPAGES.SUBSCRIBE',
    SYNC: 'SCHOOLPAGES.SYNC',
  },
}

export function syncSchool (school) {
  return {
    type: types.SCHOOL.SYNC,
    school,
  }
}

export function addSchool () {
  return {
    type: types.SCHOOL.ADD,
  }
}

export function removeSchool () {
  return {
    type: types.SCHOOL.REMOVE,
  }
}

export function schoolPageSubscribe (pageName) {
  return {
    type: types.SCHOOLPAGES.SUBSCRIBE,
    page: pageName,
  }
}

