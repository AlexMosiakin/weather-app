import React from 'react'
import s from './Days.module.scss'
import Card from './Card'
import Tabs from './Tabs'

type Props = {}

export type Day = {
    day:string,
    day_info:string,
    icon_id:string,
    temp_day:string,
    temp_night:string,
    info:string,
}


const Days = (props: Props) => {
    const days: Day[] = [
        {
            day:"Сегодня",
            day_info:"28 авг",
            icon_id:"sun",
            temp_day:"+18°",
            temp_night:"+15°",
            info:"Облачно",
        },
        {
            day:"Завтра",
            day_info:"29 авг",
            icon_id:"пасмурно_sun",
            temp_day:"+15°",
            temp_night:"+10°",
            info:"Небольшой дождь",
        },
        {
            day:"Пн",
            day_info:"28 авг",
            icon_id:"пасмурно",
            temp_day:"+18°",
            temp_night:"+15°",
            info:"Облачно",
        },
        {
            day:"Вт",
            day_info:"28 авг",
            icon_id:"облачно с прояснениями",
            temp_day:"+18°",
            temp_night:"+15°",
            info:"Облачно",
        },
        {
            day:"Ср",
            day_info:"28 авг",
            icon_id:"облачно с прояснениями",
            temp_day:"+18°",
            temp_night:"+15°",
            info:"Облачно",
        },
        {
            day:"Чт",
            day_info:"28 авг",
            icon_id:"облачно с прояснениями",
            temp_day:"+18°",
            temp_night:"+15°",
            info:"Облачно",
        },
        {
            day:"Пт",
            day_info:"28 авг",
            icon_id:"облачно с прояснениями",
            temp_day:"+18°",
            temp_night:"+15°",
            info:"Облачно",
        }, 
    ]
  return (
    <>
        <Tabs />
        <div className={s.days}>
                {daysData.map((item, index) => )}
                <Card key={index} cardDay={item}/>
            )}
        </div>
    </>
  )
}

export default Days