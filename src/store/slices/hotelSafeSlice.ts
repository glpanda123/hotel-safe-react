import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SafeState {
  pin: string;
  locked: boolean;
  input: string;
}

const initialState: SafeState = {
  pin: "",
  locked: false,
  input: "",
};

const safeSlice = createSlice({
  name: "safe",
  initialState,
  reducers: {
    setInput: (state, action: PayloadAction<string>) =>
      state.input.length < 4
        ? { ...state, input: state.input + action.payload }
        : { ...state },

    clearInput: (state) => ({
      ...state,
      input: "",
    }),
    lockSafe: (state) =>
      !state.locked && state.input.length === 4
        ? { ...state, locked: true, pin: state.input, input: "" }
        : state,
    unlockSafe: (state) =>
      state.locked && state.pin === state.input
        ? { ...state, locked: false, pin: "", input: "" }
        : state,
  },
});

export const { clearInput, lockSafe, unlockSafe, setInput } = safeSlice.actions;
export const safeReducer = safeSlice.reducer;
