"use client"
import React from 'react'
import { useTheme } from "next-themes";
import { MdLightMode, MdDarkMode } from 'react-icons/md'


const ThemeToggle = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    let IconButton = () => {
        return (
            (currentTheme == "light") ?
                <MdDarkMode
                    color='black'
                    size={30}
                />
                :
                <MdLightMode
                    color='white'
                    size={30}
                />
        );
    }
        

    return (
        <div className='shrink-0'>
            <button
                onClick={() => theme == "dark" ? setTheme('light') : setTheme("dark")}
            >
                <IconButton/>
            </button>
        </div>
    )
}

export default ThemeToggle