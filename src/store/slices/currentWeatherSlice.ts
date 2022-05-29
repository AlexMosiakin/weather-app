import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { Weather } from "../types/types";

type CurrentWeather = {
    weather: Weather,
    isLoading: boolean,
    response: Response,
};

type Response = {
    status: number,
    message: string
};

const initialState: CurrentWeather = {
    weather: {
        dt: 1653837921,
        main:{
            feels_like: 15.27,
            humidity: 45,
            pressure: 1012,
            temp: 16.4,
            temp_max: 16.4,
            temp_min: 13.73,
        },
        name: "Nizhny Novgorod",
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
    isLoading: false,
    response: {
        status: 0,
        message: '',
    }
}

export const currentWeatherSlice = createSlice({
    name: 'currentWeather',
    initialState,
    reducers:{
        fetchCurrentWeather(state: any){
            state.isLoading = true;
        },
        fetchCurrentWeatherSuccess(
            state: any,
            action: PayloadAction<AxiosResponse<Weather>>
        ){
            state.weather = action.payload.data;
            state.isLoading = false;
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText
            }
        },
        fetchCurrentWeatherError(
            state: any,
            action: PayloadAction<AxiosResponse<Weather>>
        ){
            state.isLoading = false;
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText
            }
        }
    }
})

export default currentWeatherSlice.reducer