import React, { useEffect, useState } from 'react'
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector'
import s from './Header.module.scss'
import Select from 'react-select'
import SingleValue from 'react-select/dist/declarations/src/components/SingleValue'
import { useTheme } from '../../hooks/useTheme'
import { Theme } from '../../context/ThemeContext'

type Props = {}

const Header = (props: Props) => {
    const theme = useTheme()
    const options = [
        { value: 'city-1', label: 'Санкт-Петербург' },
        { value: 'city-2', label: 'Москва' },
        { value: 'city-3', label: 'Нижний Новгород' }
    ]

    const colorStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: theme.theme == 'dark' ? '#4f4f4f' : 'rgba(71, 147, 255, 0.2)',
            width: '194px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100,
            position:'relative',
        }),
        singleValue: (styles: any) => ({
            ...styles,
            color: theme.theme == 'dark' ? '#fff' : '#000',
        }),
        menu: (styles: any) => ({
            ...styles,
            color: theme.theme == 'dark' ? '#fff' : '#000',
            backgroundColor: theme.theme == 'dark' ? '#4f4f4f' : '#fff',
            zIndex: 100,
        }),
        option: (provided: any, state: { isFocused: any }) => ({
            ...provided,
            backgroundColor: state.isFocused ? 'inherit' : 'inherit',
            color: state.isFocused ? '#4793ff' : 'inherit',
        })
    }

    const changeTheme = () => {
        theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
    }

    useEffect(() => {

    }, [theme.theme])
    

    return (
        <header className={s.header}>

            <div className={s.wrapper}>
                <div className={s.logo}>
                    <GlobalSvgSelector id='header-logo'/>
                </div>
                <div className={s.title}>React weather</div>
            </div>

            <div className={s.wrapper}>
                <div className={s.change_theme} onClick={changeTheme}>
                    <GlobalSvgSelector id='change-theme'/>
                </div>
                <Select 
                    defaultValue={options[0]} 
                    styles={colorStyles} 
                    options={options} 
                />
            </div>

        </header>
    )
}

export default Header