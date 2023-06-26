import { configureStore } from '@reduxjs/toolkit'
import { moviesApi } from './api'
import appReducer from './appSlice';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const store = configureStore({
    reducer: {
        appReducer: appReducer,
        [moviesApi.reducerPath]: moviesApi.reducer,
    },
    middleware: (gDM) => gDM().concat(moviesApi.middleware),
})

// Define the `RootState` as the return type:
export type RootState = ReturnType<typeof store.getState>
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;