import { UserData } from 'src/utils/firebase'
import {
  signInFailed,
  signUpFailed,
  signOutFailed,
  signOutSuccess,
  signInSuccess,
} from '../actions'
import { userReducer, USER_INITIAL_STATE } from '../reducer'

describe('User Reducer action tests', () => {
  test('signInSuccess should update currentUser', () => {
    const mockUser = {
      id: 1,
      email: 'test',
    } as unknown as UserData & { id: string }

    const expectedState = {
      ...USER_INITIAL_STATE,
      currentUser: mockUser,
    }

    expect(userReducer(USER_INITIAL_STATE, signInSuccess(mockUser))).toEqual(
      expectedState
    )
  })

  test('signOutSuccess should set currentUser to null', () => {
    const expectedState = {
      ...USER_INITIAL_STATE,
      currentUser: null,
    }

    expect(userReducer(USER_INITIAL_STATE, signOutSuccess())).toEqual(
      expectedState
    )
  })

  test('signOutFailed should set an error', () => {
    const mockError = new Error('Error signing out')

    const expectedState = {
      ...USER_INITIAL_STATE,
      error: mockError,
    }

    expect(userReducer(USER_INITIAL_STATE, signOutFailed(mockError))).toEqual(
      expectedState
    )
  })

  test('signUpFailed should set an error', () => {
    const mockError = new Error('Error signing in')

    const expectedState = {
      ...USER_INITIAL_STATE,
      error: mockError,
    }

    expect(userReducer(USER_INITIAL_STATE, signUpFailed(mockError))).toEqual(
      expectedState
    )
  })

  test('signInFailed should set an error', () => {
    const mockError = new Error('Error signing in')

    const expectedState = {
      ...USER_INITIAL_STATE,
      error: mockError,
    }

    expect(userReducer(USER_INITIAL_STATE, signInFailed(mockError))).toEqual(
      expectedState
    )
  })
})
