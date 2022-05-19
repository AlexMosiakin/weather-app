import React from 'react'
import s from './Days.module.scss'
import { Day } from './Days'
import GlobalSvgSelector from '../../../../assets/icons/global/GlobalSvgSelector'

type Props = {
    cardDay: Day,
}

const Card = ({ cardDay }: Props) => {
    const {day, day_info, icon_id, temp_day, temp_night, info} = cardDay
    return (
        <div className={s.card}>
            <div className={s.day}>{day}</div>
            <div className={s.day_info}>{day_info}</div>
            <div className={s.img}>
                <GlobalSvgSelector id={icon_id}/>
            </div>
            <div className={s.temp_day}>{temp_day}</div>
            <div className={s.temp_night}>{temp_night}</div>
            <div className={s.info}>{info}</div>

        </div>
    )
}

export default Card