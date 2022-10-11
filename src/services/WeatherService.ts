import axios, { AxiosResponse, AxiosResponseHeaders } from "axios";
import api from "../axios";
import { City, ForecastList, Weather } from "../store/types/types";

export class WeatherService {
    static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>>{
        return api.get<Weather>(
            `/weather?q=${city}`
        )
    }

    static getForecast(city: string): Promise<AxiosResponse<ForecastList>>{
        return api.get<ForecastList>(
            `/forecast?q=${city}`
        )
    }

    static getCity(city: string): Promise<AxiosResponse<City[]>>{
        return api.get<City[]>(
            `/direct?q=${city}`
        )
    }
}