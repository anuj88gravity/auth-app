import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../../api";

const initialState = {
    userData: null,
    isLoading: false,
    isSuccess: false,
    isError: false,
};

//login
export const login = createAsyncThunk('login', async (params, thunkApi) => {
    try {
        const response = await API.post('auth/login', params);
        return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }
});

//logout action
export const logout = createAsyncThunk('logout', (thunkApi) => {
    // Optionally, you can make an API call to log the user out from the backend.
    // But for now, we just clear the user data from the Redux store.
    return null;
});

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // login cases
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.userData = action.payload;
            })
            .addCase(login.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            })
            // logout case
            .addCase(logout.fulfilled, (state) => {
                state.userData = null;
            });
    },
});

export default authSlice.reducer;
