import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  loginPayload: {} as any,
  loginResponse: {} as any,
};

const unauthenticatedLoginSlice = createSlice({
  name: "unauthenticatedLogin",
  initialState,
  reducers: {
    setLoginPayload: (state, action: PayloadAction<any>) => {
      state.loginPayload = action.payload;
    },
    setLoginResponse: (state, action: PayloadAction<any>) => {
      state.loginResponse = action.payload
    }
  },
});

export const { setLoginPayload, setLoginResponse } = unauthenticatedLoginSlice.actions;

export default unauthenticatedLoginSlice.reducer;