import { configReducer } from '@/stores/config/slice'
import { homeReducer } from '@/stores/home/home.slice'
import { sessionReducer } from '@/stores/session/slice'
import { combineReducers } from '@reduxjs/toolkit'
export const LOGOUT_FULFILLED = 'auth/logout/fulfilled'
export const LOGIN_FULFILLED = 'auth/login/fulfilled'
export const CHANGE_PASSWORD_FULFILLED = 'auth/change-password/fulfilled'

const mainReducer = combineReducers({
  home: homeReducer,
  session: sessionReducer,
  config: configReducer
})

const rootReducer = (state: any, action: any) => {
  if (action?.type === LOGOUT_FULFILLED) state = undefined
  if (action?.type === CHANGE_PASSWORD_FULFILLED) {
    const { auth, ...rest } = state
    state = rest
  }

  return mainReducer(state, action)
}

export default rootReducer
