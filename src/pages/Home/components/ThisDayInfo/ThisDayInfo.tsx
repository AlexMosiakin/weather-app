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
        name : 'Температура',
        value: `${Math.floor(weather.main.temp)}° - ощущается как ${Math.floor(weather.main.feels_like)}°`
    },
    {
        icon_id: 'pressure',
        name : 'Давление ',
        value: `${Math.floor(weather.main.pressure)} мм ртутного столба - нормальное`
    },
    {
        icon_id: 'precipitation',
        name : 'Осадки',
        value: `${weather.weather[0].description}`
    },
    {
        icon_id: 'wind',
        name : 'Ветер',
        value: `${Math.floor(weather.wind.speed)} м/с`
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