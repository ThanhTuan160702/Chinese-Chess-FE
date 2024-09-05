import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from './Home'

const Public = () => {
  return (
    <div className='w-full flex'>
        <Home/>
    </div>
  )
}

export default Public