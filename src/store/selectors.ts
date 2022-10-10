import { RootState } from "./store";

export const selectCurrentWeatherData = (state: RootState) => 
    state.currentWeatherSliceReducer

export const selectCurrentCityData = (state: RootState) => 
    state.currentCitySliceReducer

export const selectForecastData = (state: RootState) => 
    state.forecastSliceReducer