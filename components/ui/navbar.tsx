import React, { FC } from 'react'
import DropdownMenu from './dropdown-menu'
import ThemeSwitch from './theme-switch'

const Navbar: FC = () => {
  return (
    <div className='flex justify-between'>
      <div className='flex items-center gap-10'>
        <img src='/assets/images/logo.svg' alt='logo' />
      </div>
      <div className='flex items-center gap-4'>
        <DropdownMenu />
        <ThemeSwitch />
        <img src='/assets/images/icon-moon.svg' alt='moon icon' />
      </div>
    </div>
  )
}

export default Navbar
