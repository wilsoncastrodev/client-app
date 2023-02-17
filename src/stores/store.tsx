import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import educationReducer from "./features/educationSlice";
import experienceReducer from "./features/experienceSlice";
import interestReducer from "./features/interestSlice";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

const store = configureStore({
    reducer: {
        auth: authReducer,
        education: educationReducer
        education: educationReducer,
        experience: experienceReducer,
        interest: interestReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
