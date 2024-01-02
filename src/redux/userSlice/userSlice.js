import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const loadingStatus = createSelector(
  (state) => state.user,
  (user) => user.loading
);

export const getUser = createSelector(
  (state) => state.user,
  (user) => user.user
);

export default userSlice.reducer;
