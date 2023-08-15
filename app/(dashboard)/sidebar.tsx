"use client"

import { usePathname, useRouter } from "next/navigation"
import React from "react"
import { FiChevronRight } from "react-icons/fi"

const tabs = ["Profile", "Posts", "Gallery", "ToDo"]

const Sidebar = () => {
  const pathname = usePathname()
  const router = useRouter()

  const isActiveTab = (tab: string) => {
    return pathname === `/${tab.toLowerCase()}`
  }

  const handleTabClick = (tab: string) => {
    router.push(`/${tab.toLowerCase()}`)
  }

  return (
    <div className="h-full w-full bg-gradient-to-t from-secondary to-primary rounded-2xl flex justify-center items-center">
      <div className="w-full">
        {tabs.map((tab, index) => {
          return (
            <div key={index}>
              <div key={index} className="flex items-center">
                <p
                  className={`text-background pl-8 py-4 flex-1 cursor-pointer hover:font-medium hover:opacity-100 ${
                    isActiveTab(tab) ? " opacity-100 font-medium" : "opacity-60"
                  }`}
                  onClick={() => {
                    handleTabClick(tab)
                  }}
                >
                  {tab}
                </p>
                {isActiveTab(tab) && (
                  <div className="bg-white h-8 w-11 rounded-l-full relative right-0 translate-x-1/3 flex p-2 outwardBorder">
                    <div className="z-50 text-grey">
                      <FiChevronRight />
                    </div>
                  </div>
                )}
              </div>
              {index !== tabs.length - 1 && (
                <div className="h-[1px] bg-white opacity-50 mx-8"></div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar
