export const types = {
  SCHOOL: {
    SYNC: 'SCHOOL.SYNC',
    START_ADD: 'SCHOOL.START_ADD',
    ADD_SUCCESS: 'SCHOOL.ADD_SUCCESS',
    ADD: 'SCHOOL.ADD',
    REMOVE: 'SCHOOL.REMOVE',
    FETCH: 'SCHOOL.FETCH',
    FETCH_SUCCESS: 'SCHOOL.FETCH_SUCCESS',
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

export function startAddSchool () {
  return {
    type: types.SCHOOL.START_ADD,
  }
}

export function addSchoolSuccess () {
  return {
    type: types.SCHOOL.ADD_SUCCESS,
  }
}

export function fetchSchool (schoolId) {
  return {
    type: types.SCHOOL.FETCH,
    schoolId,
  }
}

export function addSchool (school) {
  return {
    type: types.SCHOOL.ADD,
    school,
  }
}

export function removeSchool () {
  return {
    type: types.SCHOOL.REMOVE,
  }
}

export function retrievedSchool (schoolPages) {
  return {
    type: types.SCHOOL.FETCH_SUCCESS,
    schoolPages,
  }
}

export function syncSchoolPages (schoolPages) {
  return {
    type: types.SCHOOLPAGES.SYNC,
    schoolPages,
  }
}

export function schoolPageSubscribe (pageName) {
  return {
    type: types.SCHOOLPAGES.SUBSCRIBE,
    page: pageName,
  }
}

