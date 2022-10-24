import React, { useEffect, useState } from 'react'
import s from './Home.module.scss'
import ThisDay from './components/ThisDay/ThisDay'
import ThisDayInfo from './components/ThisDayInfo/ThisDayInfo'
import Days from './components/Days/Days'
import { useCustomDispatch, useCustomSelector } from '../../hooks/store'
import { fetchCurrentWeather } from '../../store/thunk/fetchCurrentWeather'
import { useSelector } from 'react-redux'
import { selectCurrentCityData, selectCurrentWeatherData, selectForecastData } from '../../store/selectors'
import { WeatherService } from '../../services/WeatherService'
import { fetchForecast } from '../../store/thunk/fetchForecas'
import Popup from '../../shared/Popup/Popup'
import { Weather } from '../../store/types/types'

interface Props {}

const Home = (props: Props) => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false)
  const [popupData, setPopupData] = useState<Weather>({
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
  })

  const dispatch = useCustomDispatch();

  const select = useCustomSelector(
    selectCurrentCityData
  )

  const { weather } = useCustomSelector(
    selectCurrentWeatherData
  )

  const forecast = useCustomSelector(
    selectForecastData
  )

  const getPopupData = (weather: Weather) => {
    setIsPopupOpen(true)
    setPopupData(weather)
  }

  useEffect(() => {
    dispatch(fetchCurrentWeather(select.label))
    dispatch(fetchForecast(select.label))
  }, [select])

  return (
    <div className={s.home}>
      <div className={s.wrapper}>
        <ThisDay weather={weather} />
        <ThisDayInfo weather={weather}/>
      </div>
        <Days forecast={forecast.list}  today={weather} getPopupData={getPopupData}/>
        <Popup isOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} popupData={popupData} city={select.label}></Popup>
    </div>
  )
}

export default Home
