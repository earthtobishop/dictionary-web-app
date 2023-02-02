import React, { FC, useState } from 'react'
import DarkTheme from './dark-theme'
import styles from './theme-switch.module.css'

const loadDarkMode = () => {
  if (typeof localStorage === 'undefined') {
    return false
  }
  const value = localStorage.getItem('darkMode')
  return value === null ? false : JSON.parse(value)
}

const ThemeSwitch: FC = () => {
  const [darkMode, setDarkMode] = useState(loadDarkMode)

  const handleClick = () => {
    localStorage.setItem('darkMode', JSON.stringify(!darkMode))
    setDarkMode(!darkMode)
  }

  return (
    <>
      <label className={styles.switch}>
        <input type='checkbox' onClick={handleClick} />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
      {darkMode && <DarkTheme />}
    </>
  )
}

export default ThemeSwitch
