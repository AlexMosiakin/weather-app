import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { ForecastList, Weather } from "../types/types";

type Forecast = {
    list: Weather[],
    isLoading: boolean,
    response: Response,
};

type Response = {
    status: number,
    message: string
};

const initialState: Forecast = {
    list: [
        {
            dt: 1653837921,
            main:{
                feels_like: 15.27,
                humidity: 45,
                pressure: 1012,
                temp: 16.4,
                temp_max: 16.4,
                temp_min: 13.73,
            },
            name: "Paris",
            weather: [
                {
                    description: "облачно с прояснениями",
                    icon: "04d",
                    id: 803,
                    main: "Clouds",
                }
            ],
            wind:{
                deg: 123,
                speed: 23
            }
        },
    ],
    isLoading: false,
    response: {
        status: 0,
        message: '',
    }
}

export const forecastSlice = createSlice({
    name: 'currentWeather',
    initialState,
    reducers:{
        fetchForecast(state: any){
            state.isLoading = true;
        },
        fetchForecastSuccess(
            state: any,
            action: PayloadAction<AxiosResponse<ForecastList>>
        ){
            state.list = action.payload.data.list;
            state.isLoading = false;
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText
            }
        },
        fetchForecastError(
            state: any,
            action: PayloadAction<AxiosResponse<ForecastList>>
        ){
            state.isLoading = false;
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText
            }
        }
    }
})

export default forecastSlice.reducer