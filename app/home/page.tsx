"use client";

import React from 'react'
import SideBar from '../../components/sidebar'
import TopBar from '../../components/topbar'
import WeatherCard from '@/components/weathercard'
import ObjectDetection from '@/components/object-detection';

const page = () => {
  return (
    <div className='flex h-screen bg-gray-100'>
        <SideBar/>
        <div className='flex-1 flex flex-col overflow-hidden ml-16 '>
            <TopBar/>
            <WeatherCard/>
            <ObjectDetection/>
        </div>
    </div>
  )
}

export default page