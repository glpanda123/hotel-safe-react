import { configureStore } from "@reduxjs/toolkit";
import {
  clearInput,
  lockSafe,
  safeReducer,
  setInput,
  unlockSafe,
} from "./slices/hotelSafeSlice";

const store = configureStore({
  reducer: {
    safe: safeReducer,
  },
});

export type HotelSafeState = ReturnType<typeof store.getState>;
export { clearInput, lockSafe, setInput, store, unlockSafe };
