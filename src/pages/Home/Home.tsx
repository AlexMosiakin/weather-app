import React, { useEffect } from 'react'
import s from './Home.module.scss'
import ThisDay from './components/ThisDay/ThisDay'
import ThisDayInfo from './components/ThisDayInfo/ThisDayInfo'
import Days from './components/Days/Days'
import { useCustomDispatch, useCustomSelector } from '../../hooks/store'
import { fetchCurrentWeather } from '../../store/thunk/fetchCurrentWeather'
import { useSelector } from 'react-redux'
import { selectCurrentWeatherData } from '../../store/selectors'

interface Props {}

const Home = (props: Props) => {
  
  const dispatch = useCustomDispatch();
  const { weather } = useCustomSelector(
    selectCurrentWeatherData
  )

  useEffect(() => {
    dispatch(fetchCurrentWeather('nizhny novgorod'))
  }, [])
  
  return (
    <div className={s.home}>
      <div className={s.wrapper}>
        <ThisDay weather={weather} />
        <ThisDayInfo />
      </div>
        <Days />
    </div>
  )
}

export default Home