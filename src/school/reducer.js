import { types } from './actions'

const initialState = {
  loading: false,
  schoolName: '',
  schoolAlias: '',
  schoolPages: [],
}

export default function schoolReducer (state = initialState, action) {
  switch (action.type) {
    case types.SCHOOL.START_ADD:
      return {
        ...state,
        loading: true,
      }
    case types.SCHOOL.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case types.SCHOOL.FETCH_SUCCESS:
      return {
        ...state,
        schoolPages: action.schoolPages,
      }
    case types.SCHOOL.ADD:
      const {school} = action
      return {
        ...state,
        schoolName: school['school.name'],
        schoolAlias: school['school.alias'],
      }
    case types.SCHOOLPAGES.SYNC:
      const {schoolPages} = action
      return {
        ...state,
        schoolPages,
      }
    default:
      return state
  }
}