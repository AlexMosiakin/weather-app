import React from 'react'
import s from './Days.module.scss'
import Card from './Card'
import Tabs from './Tabs'
import { Weather } from '../../../../store/types/types'
import moment from 'moment'
import 'moment/locale/ru'

type Props = {
    forecast: Weather[],
    today: Weather,
    getPopupData: (weather: Weather) => void,
}

export type Day = {
    day:string,
    day_info:string,
    icon_id:string,
    temp_day:string,
    temp_night:string,
    info:string,
}

moment.locale('ru')

const Days = ({ forecast, today, getPopupData }: Props) => {
    let daysData:Weather[] = [

    ]

    forecast.forEach((day) => {
        let currentDay = moment(day.dt * 1000).format('dddd')
        if(currentDay === 'понедельник'){
            if(moment(day.dt * 1000).hours() === 12){
                daysData.push(day)
            }
        }
        if(currentDay === 'вторник'){
            if(moment(day.dt * 1000).hours() === 12){
                daysData.push(day)
            }
        }
        if(currentDay === 'среда'){
            if(moment(day.dt * 1000).hours() === 12){
                daysData.push(day)
            }
        }
        if(currentDay === 'четверг'){
            if(moment(day.dt * 1000).hours() === 12){
                daysData.push(day)
            }
        }
        if(currentDay === 'пятница'){
            if(moment(day.dt * 1000).hours() === 12){
                daysData.push(day)
            }
        }
        if(currentDay === 'суббота'){
            if(moment(day.dt * 1000).hours() === 12){
                daysData.push(day)
            }
        }
        if(currentDay === 'воскресенье'){
            if(moment(day.dt * 1000).hours() === 12){
                daysData.push(day)
            }
        }
    })

    return (
        <>
            {/* <Tabs /> */}
            <div className={s.days}>
                <Card cardDay={today} isToday getPopupData={getPopupData}/>
                {daysData.map((item, index) => <Card key={index} cardDay={item} getPopupData={getPopupData}/>)}
            </div>
        </>
    )
}

export default Days