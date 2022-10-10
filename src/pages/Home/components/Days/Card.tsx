import React from 'react'
import s from './Days.module.scss'
import { Day } from './Days'
import GlobalSvgSelector from '../../../../assets/icons/global/GlobalSvgSelector'
import { Weather } from '../../../../store/types/types'
import moment from 'moment'
import 'moment/locale/ru'

type Props = {
    cardDay: Weather,
    isToday?: boolean,
    getPopupData: (weather: Weather) => void,
}

moment.locale('ru')
const Card = ({ isToday, cardDay, getPopupData }: Props) => {

    const {dt, main, weather} = cardDay
    return (
        <div className={s.card} onClick={() => getPopupData(cardDay)}>
            <div className={s.day}>{isToday ? 'Сегодня' : moment(dt * 1000).format('dddd')}</div>
            <div className={s.day_info}>{moment(dt * 1000).format('L')}</div>
            <div className={s.img}>
                <GlobalSvgSelector id={weather[0].icon}/>
            </div>
            <div className={s.temp_day}>{Math.floor(main.temp)}°</div>
            <div className={s.temp_night}>{Math.floor(main.feels_like)}°</div>
            <div className={s.info}>{weather[0].description}</div>

        </div>
    )
}

export default Card