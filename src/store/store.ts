import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import currentWeatherSliceReducer from './slices/currentWeatherSlice'
import currentCitySliceReducer from './slices/currentCitySlice'
import forecastSliceReducer from './slices/forecastSlice'

const rootReducer = combineReducers({
    currentWeatherSliceReducer,
    currentCitySliceReducer,
    forecastSliceReducer,
})

export const store = configureStore({
    reducer:rootReducer,
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch']