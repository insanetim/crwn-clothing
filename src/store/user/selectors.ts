import { createSelector } from 'reselect'

import { RootState } from 'src/store'
import { UserState } from './reducer'

const selectUserReducer = (state: RootState): UserState => state.user

export const selectCurrentUser = createSelector(
  [selectUserReducer],
  userSlice => userSlice.currentUser
)
