export type Weather = {
    dt: number,
    main:{
        feels_like: number,
        humidity: number,
        pressure: number,
        temp: number,
        temp_max: number,
        temp_min: number,
    }
    name: string,
    weather: [
        {
            description: string,
            icon: string,
            id: number,
            main: string,
        }
    ],
    wind:{
        deg: number,
        speed: number
    }
}