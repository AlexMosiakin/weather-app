import React from 'react'
import s from './ThisDayInfo.module.scss'
import cloud from '../../../../assets/images/cloud.png'
import ThisDayItem from './ThisDayItem'
import { Weather } from '../../../../store/types/types'

type Props = {
    weather: Weather,
}

export type Item = {
    icon_id: string,
    name : string,
    value: string,
}

const ThisDayInfo = ({weather}: Props) => {
    const items = [
    {
        icon_id: 'temp',
        name : 'Temperature',
        value: `${Math.floor(weather.main.temp)}° - feels like ${Math.floor(weather.main.feels_like)}°`
    },
    {
        icon_id: 'pressure',
        name : 'Pressure ',
        value: `${Math.floor(weather.main.pressure)} mm of mercury column`
    },
    {
        icon_id: 'precipitation',
        name : 'Precipitation',
        value: `${weather.main.humidity}%`
    },
    {
        icon_id: 'wind',
        name : 'Wind',
        value: `${Math.floor(weather.wind.speed)} m/s`
    },
    ]
    
    return (
        <div className={s.this_day_info}>
            <div className={s.this_day_info_items}>
                {items.map((item: Item) => 
                    <ThisDayItem key={item.icon_id} item={item} />
                )}
            </div>
            <img className={s.cloud_img} src={cloud} alt="cloud" />
        </div>
    )
}

export default ThisDayInfo