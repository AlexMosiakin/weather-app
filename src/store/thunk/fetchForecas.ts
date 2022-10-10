import { WeatherService } from "../../services/WeatherService";
import { forecastSlice } from "../slices/forecastSlice";

import { AppDispatch } from "../store";

export const fetchForecast = (payload: string) => 
    async (dispatch: AppDispatch) => {
    try {
        dispatch(forecastSlice.actions.fetchForecast)
        const res = await WeatherService.getForecast(payload)

        if(res.status === 200){
            dispatch(forecastSlice.actions.
                fetchForecastSuccess(res))
        } else{
            dispatch(forecastSlice.actions.
                fetchForecastError(res))
        }
    } catch (error) {
        console.log(error)
    }
    }