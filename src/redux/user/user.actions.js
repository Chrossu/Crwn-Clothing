import {SET_CURRENT_USER, SIGN_OUT_SUCCESS, SIGN_IN_FAILURE, SIGN_OUT_FAILURE } from './user.types'

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user
})

export const signInFailure = error => ({
  type: SIGN_IN_FAILURE,
  payload: error
})

export const signOutSucess = () => ({
  type: SIGN_OUT_SUCCESS
})

export const signOutFailure = () => ({
  type: SIGN_OUT_FAILURE
})