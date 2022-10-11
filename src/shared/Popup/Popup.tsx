import React, { Dispatch, SetStateAction } from 'react'
import { Item } from '../../pages/Home/components/ThisDayInfo/ThisDayInfo';
import ThisDayItem from '../../pages/Home/components/ThisDayInfo/ThisDayItem';
import s from './Popup.module.scss'
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector'
import { Weather } from '../../store/types/types';
import moment from 'moment'
import 'moment/locale/ru'

type Props = {
    isOpen: boolean,
    popupData: Weather
    setIsPopupOpen: Dispatch<SetStateAction<boolean>>,
    city: string,
}

const Popup = ({isOpen, popupData, setIsPopupOpen, city}: Props) => {
    const items = [
        {
            icon_id: 'temp',
            name : 'Температура',
            value: `${Math.floor(popupData.main.temp)}° - ощущается как ${Math.floor(popupData.main.feels_like)}°`
        },
        {
            icon_id: 'pressure',
            name : 'Давление ',
            value: `${popupData.main.pressure} мм ртутного столба`
        },
        {
            icon_id: 'precipitation',
            name : 'Влажность',
            value: `${popupData.main.humidity}%`
        },
        {
            icon_id: 'wind',
            name : 'Ветер',
            value: `${popupData.wind.speed} м/с`
        },
    ]

    return (
        <div className={isOpen ? s.blur : s.blur + ' ' + s.hide}>
            <div className={s.popup}>
                <div className={s.day}>
                    <div className={s.day_temp}>{Math.floor(popupData?.main?.temp)}°</div>
                    <div className={s.day_name}>{moment(popupData.dt * 1000).format('dddd')}</div>
                    <div className={s.img}>
                        <GlobalSvgSelector id={popupData?.weather[0].icon}/>
                    </div>
                    <div className={s.day_time}>
                        Время: <span>{moment(popupData.dt * 1000).format('L')}</span>
                    </div>
                    <div className={s.day_city}>
                        Город: <span>{city}</span>
                    </div>
                </div>
                <div className={s.this_day_info_items}>
                    {items.map((item: any, index: number) => 
                        <ThisDayItem key={index} item={item} />
                    )}
                </div>
                <div className={s.close} onClick={() => setIsPopupOpen(false)}>
                    <GlobalSvgSelector  id="close"/>
                </div>
            </div>
        </div>
    )
}

export default Popup