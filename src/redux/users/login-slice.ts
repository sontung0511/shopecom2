import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import toast from 'react-hot-toast';
import publicAxios from '../../utils/public-axios';
import { setError } from '../../utils/error';
type User = {
  username: string;
  password: string;
};
type UserInfo = {
  _id: string;
  email: string;
  name: string;
  isAdmin: Boolean;
  createdAt: Date;
};
export interface UserSliceState {
  userInfo?: UserInfo | null;
  loading: boolean;
  error: null | object;
}
const initialState: UserSliceState = {
  userInfo: null,
  loading: false,
  error: null,
};
export const userLogin = createAsyncThunk(
  '/login',
  async (user: User, thunkAPI) => {
    try {
      const res = await publicAxios.post('/login', user, {
        headers: {
          'X-TOKEN-ACCESS': 'ijCCtggxLEkG3Yg8hNKZJvMM4EA1Rw4VjVvyIOb7',
          'Content-Type': 'application/json',
        }
      });
      if (res.data) {
        // toast.success(`Bienvenue 👏 ${res.data.name}`);
        return res.data;
      }
    } catch (error: any) {
      const message = setError(error);
      toast.error(message);
      thunkAPI.rejectWithValue(message);
    }
  }
);
const loginSlice = createSlice({
  name: "auth-login",
  initialState,
  reducers: {
    userLogout: (state: UserSliceState) => {
      state.userInfo = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      // Add user to the state array
      state.loading = true;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
    });
    builder.addCase(userLogin.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { userLogout } = loginSlice.actions;

export default loginSlice;