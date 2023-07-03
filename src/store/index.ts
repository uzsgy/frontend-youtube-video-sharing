import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
