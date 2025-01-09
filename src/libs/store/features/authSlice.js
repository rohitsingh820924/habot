import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";
import { apiPost } from '../../api';

// Initial state
const initialState = {
  isAuth: false,
  authToken: null,
  fullname: null,
  email: null,
  phoneNumber: null,
  country: null,
  id: null,
  isVerified: false,
  loading: false,
  error: null,
  profilePicture: null,
};

// Helper to reset state
const resetAuthState = (state) => {
  state.isAuth = false;
  state.authToken = null;
  state.id = null;
  state.fullname = null;
  state.email = null;
  state.phoneNumber = null;
  state.country = null;
  state.isVerified = false;
  state.profilePicture = false;
};

export const setProfile = createAsyncThunk('auth/setProfile', async (_, { getState, rejectWithValue }) => {
  try {
    const { authToken } = getState().auth;
    
    if (!authToken) {
      throw new Error('No auth token available');
    }
    
    const response = await apiPost('http://localhost:5000/auth/profile', { id: getState().auth.id }, // Send the user's ID from Redux state
    );
    console.log(response);
    
    return response; // Assuming the API returns user data in response.data
  } catch (error) {
    return rejectWithValue(error.response?.data || error.message);
  }
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    checkAuthStatus(state) {
      const cookie = Cookies.get('authToken'); // Get token from cookie
      if (cookie) {
        const token = cookie;
        try {
          const decoded = jwtDecode(token); // Decode the token
          const currentTime = Date.now() / 1000;
          
          // Check if token is expired
          if (decoded.exp < currentTime) {
            resetAuthState(state);
            Cookies.remove('authToken'); // Remove expired token
          } else {
            state.isAuth = true;
            state.authToken = token;
            state.email = decoded?.user?.email;
            state.id = decoded?.user?._id;
            state.isVerified = decoded?.user?.isVerified;
          }
        } catch (error) {
          console.error("Invalid token:", error);
          resetAuthState(state);
        }
      } else {
        resetAuthState(state);
      }
    },
    logout(state) {
      resetAuthState(state);
      Cookies.remove('authToken'); // Remove token from cookie
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(setProfile.fulfilled, (state, action) => {
        state.loading = false;
        const {name, phoneNumber, country, profilePicture, isVerified, email } = action.payload;
        console.log(name);
        
        
        state.fullname = name;
        state.phoneNumber = phoneNumber;
        state.country = country;
        state.profilePicture = profilePicture;
        state.isVerified = isVerified;
        state.email = email;
      })
      .addCase(setProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { checkAuthStatus, logout } = authSlice.actions;

export default authSlice.reducer;
