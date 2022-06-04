import axios, { AxiosResponse, AxiosResponseHeaders } from "axios";
import api from "../axios";
import { Weather } from "../store/types/types";
const API_KEY = '90b12d1819feaafe2a0b15cbc348173a';

export class WeatherService {
    static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>>{
        return api.get<Weather>(
            `/weather?q=${city}`
        )
    }
}