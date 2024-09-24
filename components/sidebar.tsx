"use client";

import useSideBar from "@/hooks/use-sidebar";
import { Home, Menu } from "lucide-react";
import React from "react";

const SideBar = () => {
  const { expand, onExpand, page } = useSideBar();

  return (
    <aside
      className={`${
        expand ? "w-64" : "w-16"
      } fixed inset-y-0 left-0 z-50 bg-white shadow-lg transition-all duration-300 ease-in-out lg:w-64 lg:static lg:inset-0`}
    >
      <div className="flex items-center justify-between p-4">
      {expand && <span className="text-xl font-semibold">JuaSmart</span>}
        <button
          onClick={onExpand}
          className="lg:hidden"
        >
          <Menu size={24} className="text-gray-700" />
        </button>
      </div>
      <nav className="mt-8">
        <a
          href="#"
          className="flex items-center px-4 py-2 text-gray-700 bg-gray-100"
        >
          <Home className="w-5 h-5 mr-2" />
          {expand && "Home"} 
        </a>
        <a
          href="#"
          className="flex items-center px-4 py-2 text-gray-700 bg-white"
        >
          <Home className="w-5 h-5 mr-2" />
          {expand && "Crop Prices"} 
        </a>
      </nav>
    </aside>
  );
};

export default SideBar;
