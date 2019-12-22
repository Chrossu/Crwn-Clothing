import {SIGN_IN_SUCCESS, SIGN_OUT_SUCCESS, SIGN_IN_FAILURE, SIGN_OUT_FAILURE } from './user.types'

export const signInSuccess = user => ({
  type: SIGN_IN_SUCCESS,
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