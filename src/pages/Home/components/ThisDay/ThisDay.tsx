import moment from 'moment'
import React from 'react'
import GlobalSvgSelector from '../../../../assets/icons/global/GlobalSvgSelector'
import { Weather } from '../../../../store/types/types'
import s from './ThisDay.module.scss'


type Props = {
    weather: Weather
}

const ThisDay = ({weather}: Props) => {
    let unix_timestamp = weather.dt
    let date = new Date(unix_timestamp * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    
    return (
        <div className={s.this_day}>
            <div className={s.top_block}>
                <div className={s.top_block_wrapper}>
                    <div className={s.this_temp}>
                        {Math.floor(weather.main.temp)}°
                    </div>
                    <div className={s.this_day_name}>
                        Сегодня
                    </div>
                </div>
                <GlobalSvgSelector id={weather.weather[0].description}/>
            </div>
            <div className={s.bottom_block}>
                <div className={s.this_time}>
                    Время: <span>{hours + `:`+ minutes.slice(1)}</span>
                </div>
                <div className={s.this_city}>
                    Город: <span>{weather.name}</span>
                </div>
            </div>
        </div>
    )
}

export default ThisDay