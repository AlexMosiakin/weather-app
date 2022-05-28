import { createContext, ReactNode, useState } from "react"
import { Theme, ThemeContext } from "../context/ThemeContext"
import { ChangeCssTheme } from "../model/ChangeCssTheme"
import { Storage } from "../model/Storage"

type Props = {
    children: ReactNode,
}

export const ThemeProvider = ({ children, ...props}: Props) => {
    const [theme, setTheme] = useState<Theme>(
        Storage.getItem('theme') || Theme.LIGHT
    )
    ChangeCssTheme(theme)
    const changeTheme = (theme: Theme) => {
        Storage.setItem('theme', theme)
        setTheme(theme)
        ChangeCssTheme(theme)
    }

    return (
        <ThemeContext.Provider value={{
            theme,
            changeTheme,
        }}
        {...props}>
            {children}
        </ThemeContext.Provider>
    )
}