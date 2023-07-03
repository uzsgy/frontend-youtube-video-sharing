import { CaseReducer, PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUser } from '../consts/user';

type AuthState = {
  user?: IUser;
  accessToken?: string;
};

const initialState: AuthState = {};

const _logout: CaseReducer<AuthState> = (state) => {
  state.accessToken = undefined;
  document.cookie = 'auth= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';
  window && window.localStorage.clear();
};

const _setUser: CaseReducer<AuthState, PayloadAction<IUser>> = (
  state,
  action
) => {
  state.user = action.payload;
  document.cookie = 'auth=true';
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    logout: _logout,
    setUser: _setUser,
  },
});

export const authActions = authSlice.actions;
export const authAsyncActions = {};
export default authSlice.reducer;
