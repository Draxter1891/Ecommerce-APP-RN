import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer({ token: null }, (builder) => {

  //LOGIN CASE
  builder.addCase("loginRequest", (state, action) => {
    state.loading = true
  })
  builder.addCase("loginSuccess", (state, action) => {
    state.loading = false
    state.message = action.payload.message
    state.isAuth = true
    state.token = action.payload.token
  })
  builder.addCase("loginFailed", (state, action) => {
    state.isAuth = false
    state.error = action.payload
  })

  //ERROR MESSAGE CASE
  builder.addCase('clearError', (state) => {
    state.error = null
  })
  builder.addCase('clearMessage', (state) => {
    state.message = null
  })

  //GET USERDATA
  builder.addCase("getUserDataRequest", (state, action) => {
    state.loading = true
  })
  builder.addCase("getUserDataSuccess", (state, action) => {
    state.loading = false
    state.isAuth = true
    state.user = action.payload
  })
  builder.addCase("getUserDataFailed", (state, action) => {
    state.isAuth = false
    state.error = action.payload
  })

  //REGISTER
  builder.addCase("registerRequest", (state, action) => {
    state.loading = true
  })
  builder.addCase("registerSuccess", (state, action) => {
    state.loading = false
    state.isAuth = true
    state.message = action.payload
  })
  builder.addCase("registerFailed", (state, action) => {
    state.isAuth = false
    state.error = action.payload
  })

  //LOGOUT
  builder.addCase("logoutRequest", (state, action) => {
    state.loading = true
  })
  builder.addCase("logoutSuccess", (state, action) => {
    state.loading = false
    state.isAuth = false
    state.user = null
    state.message = action.payload
  })
  builder.addCase("logoutFailed", (state, action) => {
    state.isAuth = false
    state.error = action.payload
  })
});
