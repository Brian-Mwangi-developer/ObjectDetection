"use client";

import { Bell, ChevronDown, Menu, Search } from 'lucide-react'
import React, { useState } from 'react'

const TopBar = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white border-b">
    
    <div className="flex items-center">
      <Search className="w-5 h-5 text-gray-500" />
      <input type="text" placeholder="Search..." className="ml-2 outline-none" />
    </div>
    <div className="flex items-center">
      <Bell className="w-5 h-5 text-gray-500 mr-4" />
      <div className="flex items-center">
        <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="User" className="w-8 h-8 rounded-full" />
        <span className="ml-2 text-sm font-medium">Adam Holland</span>
        <ChevronDown className="w-4 h-4 ml-1 text-gray-500" />
      </div>
    </div>
  </header>
  )
}

export default TopBar