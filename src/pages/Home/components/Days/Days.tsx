import s from './Days.module.scss'
import Card from './Card'
import { Weather } from '../../../../store/types/types'
import moment from 'moment'

type Props = {
    forecast: Weather[],
    today: Weather,
    getPopupData: (weather: Weather) => void,
}

export type Day = {
    day: string,
    day_info: string,
    icon_id: string,
    temp_day: string,
    temp_night: string,
    info: string,
}

moment.locale('ru')
const HOUR_TO_SHOW = 13

const Days = ({ forecast, today, getPopupData }: Props) => {
    let daysData: Weather[] = []

    forecast.forEach((day) => {
        let currentDay = moment(day.dt * 1000).format('dddd')

        if (moment(day.dt * 1000).hours() === HOUR_TO_SHOW) {
            switch (currentDay) {
                case 'Monday':
                    daysData.push(day)
                    break
                case 'Tuesday':
                    daysData.push(day)
                    break
                case 'Wednesday':
                    daysData.push(day)
                    break
                case 'Thursday':
                    daysData.push(day)
                    break
                case 'Friday':
                    daysData.push(day)
                    break
                case 'Saturday':
                    daysData.push(day)
                    break
                case 'Sunday':
                    daysData.push(day)
                    break
            }
        }
    })

    return (
        <>
            {/* <Tabs /> */}
            <div className={s.days}>
                <Card cardDay={today} isToday getPopupData={getPopupData} />
                {daysData.map((item, index) => <Card key={index} cardDay={item} getPopupData={getPopupData} />)}
            </div>
        </>
    )
}

export default Days