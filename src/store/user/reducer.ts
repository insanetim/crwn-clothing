import { AnyAction } from 'redux'

import {
  signInSuccess,
  signOutSuccess,
  signInFailed,
  signUpFailed,
  signOutFailed,
} from './actions'
import { UserData } from 'src/utils/firebase'

export type UserState = {
  readonly currentUser: UserData | null
  readonly error: Error | null
}

const USER_INITIAL_STATE: UserState = {
  currentUser: null,
  error: null,
}

export const userReducer = (
  state = USER_INITIAL_STATE,
  action: AnyAction
): UserState => {
  if (signInSuccess.match(action)) {
    return { ...state, currentUser: action.payload }
  }

  if (signOutSuccess.match(action)) {
    return { ...state, currentUser: null }
  }

  if (
    signInFailed.match(action) ||
    signUpFailed.match(action) ||
    signOutFailed.match(action)
  ) {
    return { ...state, error: action.payload }
  }

  return state
}
